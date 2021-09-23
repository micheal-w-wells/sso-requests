import { Request } from 'interfaces/Request';
import { realmToIDP } from 'utils/helpers';
import styled from 'styled-components';
import { FORM_TOP_SPACING } from 'styles/theme';

const Table = styled.table`
  margin-top: ${FORM_TOP_SPACING};
  font-size: unset;
  & tr {
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    & > td {
      border: none;
      padding: 0 5px 0 0;
    }
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  max-width: 500px;
  background-color: #e3e3e3;
  height: 2px !important;
`;

const SemiBold = styled.span`
  font-weight: 600;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  & li {
    margin: 0;
  }
`;

const formatBoolean = (value?: boolean) => {
  if (value === undefined) return '';
  return value ? 'Yes' : 'No';
};

interface FormattedListProps {
  list: any[];
  title: string;
}

const FormattedList = ({ list, title }: FormattedListProps) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        {list?.length === 1 && (
          <SemiBold>
            <span key={list[0]}>{list[0]}</span>
          </SemiBold>
        )}
      </tr>
      {list?.length > 1 && (
        <tr>
          <td>
            <SemiBold>
              <StyledUl>
                {list?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </StyledUl>
            </SemiBold>
          </td>
        </tr>
      )}
    </>
  );
};

interface Props {
  request: Request;
}

function RequestPreview({ request }: Props) {
  if (!request) return null;

  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td>Are you the product owner or project admin/team lead?</td>
            <td>
              <SemiBold>{formatBoolean(request?.projectLead)}</SemiBold>
            </td>
          </tr>
          <tr>
            <td>Have you requested an SSO access before?</td>
            <td>
              <SemiBold>{formatBoolean(request?.newToSso)}</SemiBold>
            </td>
          </tr>
          <tr>
            <td>Client Type:</td>
            <td>
              <SemiBold>{request?.publicAccess ? 'Public' : 'Confidential'}</SemiBold>
            </td>
          </tr>
          <tr>
            <td>Project Name:</td>
            <td>
              <SemiBold>{request?.projectName}</SemiBold>
            </td>
          </tr>
          <tr>
            <td>Default email address:</td>
            <td>
              <SemiBold>{request?.preferredEmail}</SemiBold>
            </td>
          </tr>
          <FormattedList list={request?.additionalEmails} title="Additional Emails:" />
        </tbody>
      </Table>
      <Divider />
      <Table>
        <tbody>
          <FormattedList list={realmToIDP(request?.realm)} title="Identity Providers Required:" />
          <FormattedList list={request?.devValidRedirectUris} title="Dev Redirect URIs:" />
          <FormattedList list={request?.testValidRedirectUris} title="Test Redirect URIs:" />
          <FormattedList list={request?.prodValidRedirectUris} title="Prod Redirect URIs:" />
        </tbody>
      </Table>
    </>
  );
}

export default RequestPreview;
