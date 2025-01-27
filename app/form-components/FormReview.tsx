import React, { useState } from 'react';
import { Request } from 'interfaces/Request';
import FormButtons from 'form-components/FormButtons';
import { padStart } from 'lodash';
import { updateRequest } from 'services/request';
import { useRouter } from 'next/router';
import { validateForm, parseError, usesBceid } from 'utils/helpers';
import { withBottomAlert, BottomAlert } from 'layout/BottomAlert';
import CenteredModal from 'components/CenteredModal';
import Link from '@button-inc/bcgov-theme/Link';
import RequestPreview from 'components/RequestPreview';
import { SaveMessage } from 'interfaces/form';
import Form from 'form-components/GovForm';
import commentSchema from 'schemas/admin-comment';
import uiSchema from 'schemas/commentUi';
import { adminNonBceidSchemas, nonBceidSchemas } from 'schemas/non-bceid-schemas';
import BceidEmailTemplate from 'form-components/BceidEmailTemplate';
import { NumberedContents } from '@bcgov-sso/common-react-components';
import { Team } from 'interfaces/team';

interface Props {
  formData: Request;
  setErrors: Function;
  errors: any;
  visited: any;
  alert: BottomAlert;
  saving?: boolean;
  saveMessage?: SaveMessage;
  isAdmin?: boolean;
  setFormData: Function;
  teams: Team[];
}

function FormReview({ formData, setFormData, setErrors, alert, isAdmin, teams }: Props) {
  const [bceidEmailDetails, setBceidEmailDetails] = useState({});
  const router = useRouter();
  const hasBceid = usesBceid(formData.realm);
  const hasBceidProd = hasBceid && formData.prod;

  const handleSubmit = async () => {
    try {
      const [, err] = await updateRequest(formData, true);

      if (err) {
        alert.show({
          variant: 'danger',
          fadeOut: 10000,
          closable: true,
          content: parseError(err).message,
        });
      } else {
        alert.show({
          variant: 'success',
          fadeOut: 10000,
          closable: true,
          content: `Request ID:${padStart(String(formData.id), 8, '0')} is successfully submitted!`,
        });

        router.push({
          pathname: isAdmin ? '/admin-dashboard' : '/my-requests',
          query: { id: formData.id },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: any) => {
    setFormData(e.formData);
  };

  const openModal = () => {
    const validationSchemas = isAdmin ? adminNonBceidSchemas(teams) : nonBceidSchemas(teams);
    const formErrors = validateForm(formData, validationSchemas);
    if (Object.keys(formErrors).length > 0) {
      alert.show({
        variant: 'danger',
        fadeOut: 10000,
        closable: true,
        content:
          'There were errors with your submission. Please see the navigation tabs above for the form pages with errors.',
      });

      return setErrors(formErrors);
    } else {
      window.location.hash = 'confirmation-modal';
    }
  };

  const handleBackClick = () => {
    const url = isAdmin ? '/admin-dashboard' : '/my-requests';
    router.push(url);
  };

  const backText = isAdmin ? 'Cancel' : 'Save and Close';
  const submitText = isAdmin ? 'Update' : 'Submit';

  return (
    <div>
      <NumberedContents title="Please review your information to make sure it is correct." number={1}>
        <RequestPreview request={formData} hasBceid={hasBceid || false} isAdmin={isAdmin} />
      </NumberedContents>

      <NumberedContents
        title={`Your ${hasBceid ? 'Dev and/or Test' : ''} environment(s) will be provided by the SSO Pathfinder team.`}
        number={2}
      >
        <p>Once you submit the request, access will be provided in 20 minutes or fewer.</p>
      </NumberedContents>
      {isAdmin && (
        <Form schema={commentSchema} uiSchema={uiSchema} liveValidate onChange={handleChange} formData={formData}>
          <></>
        </Form>
      )}
      {hasBceidProd ? (
        <NumberedContents number={3} title="Your Prod environment will be provided by the BCeID Team" showLine={false}>
          <BceidEmailTemplate bceidEmailDetails={bceidEmailDetails} setBceidEmailDetails={setBceidEmailDetails} />
          <FormButtons
            text={{ continue: submitText, back: backText }}
            show={true}
            handleSubmit={openModal}
            handleBackClick={handleBackClick}
          />
        </NumberedContents>
      ) : (
        <FormButtons
          text={{ continue: submitText, back: backText }}
          show={true}
          handleSubmit={openModal}
          handleBackClick={handleBackClick}
        />
      )}
      <CenteredModal
        id={`confirmation-modal`}
        content={
          <>
            <p>Are you sure you're ready to submit your request?</p>
            {!isAdmin && (
              <p>
                If you need to change anything after submitting your request, please contact our{' '}
                <Link external href="https://chat.developer.gov.bc.ca/channel/sso/">
                  #SSO channel
                </Link>{' '}
                or email <Link href="mailto:bcgov.sso@gov.bc.ca">bcgov.sso@gov.bc.ca</Link>
              </p>
            )}
          </>
        }
        onConfirm={handleSubmit}
      />
    </div>
  );
}

export default withBottomAlert(FormReview);
