import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Grid from '@button-inc/bcgov-theme/Grid';
import Tab from 'react-bootstrap/Tab';
import { padStart } from 'lodash';
import styled from 'styled-components';
import { getRequests, deleteRequest } from 'services/request';
import { Request } from 'interfaces/Request';
import Table from 'html-components/Table';
import DefaultButton from 'html-components/Button';
import ResponsiveContainer, { MediaRule } from 'components/ResponsiveContainer';
import ActionButtons from 'components/ActionButtons';
import reducer from 'reducers/requestReducer';
import RequestInfoTabs, { TabKey } from 'components/RequestInfoTabs';
import { getStatusDisplayName } from 'utils/status';
import { $setRequests, $setEditingRequest, $deleteRequest } from 'dispatchers/requestDispatcher';
import { PageProps } from 'interfaces/props';
import PageLoader from 'components/PageLoader';
import { RequestTabs } from 'components/RequestTabs';
import CenteredModal from 'components/CenteredModal';
import { hasAnyPendingStatus } from 'utils/helpers';

const mediaRules: MediaRule[] = [
  {
    maxWidth: 900,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginUnit: 'px',
    horizontalAlign: 'none',
  },
  {
    width: 480,
    marginTop: 0,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginUnit: 'rem',
    horizontalAlign: 'none',
  },
];

// TODO: move this logic to component Grid default style
const OverflowAuto = styled.div`
  overflow: auto;
`;

const NotAvailable = styled.div`
  color: #a12622;
  height: 60px;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 22px;
  weight: 700;
  background-color: #f2dede;
`;

const NoProjects = styled.div`
  color: #006fc4;
  height: 60px;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 22px;
  weight: 700;
  background-color: #f8f8f8;
`;

const CenteredHeader = styled.th`
  text-align: center;
  min-width: 100px;
`;

const Button = styled(DefaultButton)`
  margin-bottom: 16px;
`;

export const RequestsContext = React.createContext({} as any);

function RequestsPage({ currentUser }: PageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [state, dispatch] = useReducer(reducer, {});
  const { requests = [] } = state;
  const selectedRequest = requests.find((request: Request) => request.id === Number(selectedId));
  const canDelete = !['pr', 'planned', 'submitted'].includes(selectedRequest?.status || '');
  const [viewArchived, setViewArchived] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>(state.editingRequest ? 'configuration-url' : 'installation-json');

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  const getData = async () => {
    setLoading(true);
    setSelectedId(undefined);

    const [data, err] = await getRequests('all');
    if (err) {
      setHasError(true);
    } else {
      const downloadedRequests = data || [];
      dispatch($setRequests(downloadedRequests));

      const { id } = router.query;
      if (id) {
        setSelectedId(Number(id));
      }
    }

    setLoading(false);
  };

  const confirmDelete = async () => {
    if (!canDelete) return;
    const [_deletedRequest, _err] = await deleteRequest(selectedId);
    dispatch($deleteRequest(selectedId || null));
    getData();
    window.location.hash = '#';
  };

  useEffect(() => {
    getData();
  }, []);

  let interval: any;

  useEffect(() => {
    if (hasAnyPendingStatus(state.requests || [])) {
      clearInterval(interval);

      interval = setInterval(async () => {
        const [data, err] = await getRequests('all');

        if (err) {
          clearInterval(interval);
        } else {
          let downloadedRequests = data || [];
          if (!state.editingRequest) {
            dispatch($setRequests(downloadedRequests));
          }
        }
      }, 1000 * 5);
    }

    return () => {
      interval && clearInterval(interval);
    };
  }, [state.requests, state.editingRequest]);

  const handleSelection = async (request: Request) => {
    if (selectedId === request.id) return;
    setSelectedId(request?.id);
    dispatch($setEditingRequest(false));
  };

  const handleNewClick = async () => {
    router.push('/request');
  };

  if (loading) return <PageLoader />;

  let content = null;
  if (hasError) {
    content = (
      <NotAvailable>
        <FontAwesomeIcon icon={faExclamationCircle} title="Unavailable" />
        &nbsp; The system is unavailable at this moment. please refresh the page.
      </NotAvailable>
    );
  } else if (requests.length === 0) {
    content = (
      <NoProjects>
        <FontAwesomeIcon icon={faInfoCircle} title="Information" />
        &nbsp; No requests submitted
      </NoProjects>
    );
  } else {
    content = (
      <Table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Project Name</th>
            <th>Status</th>
            <CenteredHeader>Actions</CenteredHeader>
          </tr>
        </thead>
        <tbody>
          {requests
            .filter((request: Request) => viewArchived === request.archived)
            .map((request: Request) => {
              return (
                <tr
                  className={selectedRequest?.id === request.id ? 'active' : ''}
                  key={request.id}
                  onClick={() => handleSelection(request)}
                >
                  <td>{padStart(String(request.id), 8, '0')}</td>
                  <td>{request.projectName}</td>
                  <td>{getStatusDisplayName(request.status || 'draft')}</td>
                  <td>
                    <ActionButtons
                      request={request}
                      selectedRequest={selectedRequest}
                      setSelectedId={setSelectedId}
                      setActiveTab={setActiveTab}
                      archived={request.archived}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }

  return (
    <ResponsiveContainer rules={mediaRules}>
      <Button size="large" onClick={handleNewClick}>
        + Request Integration
      </Button>
      <RequestsContext.Provider value={contextValue}>
        <Grid cols={10}>
          <Grid.Row collapse="1100" gutter={[15, 2]}>
            <Grid.Col span={6}>
              <OverflowAuto>
                <RequestTabs onSelect={(key: string) => setViewArchived(key === 'archived')}>
                  <Tab eventKey="active" title="My Dashboard" />
                  <Tab eventKey="archived" title="Archived" />
                </RequestTabs>
                {content}
              </OverflowAuto>
            </Grid.Col>
            {selectedRequest && (
              <Grid.Col span={4}>
                <RequestInfoTabs
                  key={selectedRequest.id + selectedRequest.status + state.editingRequest}
                  selectedRequest={selectedRequest}
                  defaultTabKey={activeTab}
                  setActiveKey={setActiveTab}
                  activeKey={activeTab}
                />
              </Grid.Col>
            )}
          </Grid.Row>
        </Grid>
        <CenteredModal
          id={'delete-modal'}
          content="You are about to delete this integration request. This action cannot be undone."
          onConfirm={confirmDelete}
          title="Confirm Deletion"
          confirmText="Delete"
        />
      </RequestsContext.Provider>
    </ResponsiveContainer>
  );
}

export default RequestsPage;
