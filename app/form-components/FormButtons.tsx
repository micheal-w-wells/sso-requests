import Button from '@button-inc/bcgov-theme/Button';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { FORM_BUTTON_TOP_SPACING } from 'styles/theme';

interface Props {
  show: boolean | undefined;
  loading: boolean;
  text: {
    continue: string;
    back: string;
  };
  handleSubmit?: Function;
  handleBackClick?: Function;
  formSubmission?: boolean;
}

const PaddedButton = styled(Button)`
  margin-left: 10px;
  min-width: 150px;
`;

const CancelButton = styled(Button)`
  min-width: 150px;
  background-color: #b2b2b2;
  color: white;
  box-shadow: none !important;

  &:hover {
    box-shadow: 0px 0px 0px 2px #006fc4 inset !important;
    background-color: #b2b2b2;
  }
`;

const Container = styled.div`
  margin-top: ${FORM_BUTTON_TOP_SPACING};
`;

export default function FormButtons({ show, loading, text, handleSubmit, handleBackClick, formSubmission }: Props) {
  return (
    <>
      {show && (
        <Container>
          <CancelButton variant="secondary" size="small" type="button" onClick={handleBackClick}>
            {text.back}
          </CancelButton>
          <PaddedButton
            variant="primary"
            size="small"
            onClick={handleSubmit}
            type={formSubmission ? 'submit' : 'button'}
          >
            {loading ? <Loader type="Grid" color="#FFF" height={18} width={50} visible /> : <>{text.continue}</>}
          </PaddedButton>
        </Container>
      )}
    </>
  );
}
