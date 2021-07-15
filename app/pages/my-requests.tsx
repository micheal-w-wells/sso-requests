import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Grid from '@button-inc/bcgov-theme/Grid';
import Button from '@button-inc/bcgov-theme/Button';
import { get, findIndex } from 'lodash';
import styled from 'styled-components';
import { getRequests } from 'services/request';
import { getInstallation } from 'services/keycloak';
import { Request } from 'interfaces/Request';
import providerSchema from 'schemas/providers';
import Table from 'components/Table';
import ResponsiveContainer, { MediaRule } from 'components/ResponsiveContainer';

const mediaRules: MediaRule[] = [
  {
    maxWidth: 767,
  },
  {
    maxWidth: 991,
    width: 980,
  },
  {
    maxWidth: 1199,
    width: 1100,
  },
  {
    width: 1400,
  },
];

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`;

const NavTabs = styled.ul`
  & > li {
    margin-bottom: 0 !important;
  }
`;

const getProviders = (realm: string) => {
  const enums: string[] = get(providerSchema, 'properties?.realm.enumNames', []);
  const enumNames: string[] = get(providerSchema, 'properties?.realm.enumNames', []);
  const ind = findIndex(enums, (v) => v === realm);
  return enumNames[ind];
};

interface Props {
  currentUser: {
    email?: string;
  };
}

function RequestsPage({ currentUser }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [requests, setRequests] = useState<Request[]>([]);
  const [env, setEnv] = useState<'dev' | 'test' | 'prod'>('dev');
  const [requestId, setRequestId] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await getRequests();
      setRequests(data || []);
      setLoading(false);
    };

    getData();
  }, []);

  const handleInstallationClick = async (request: Request) => {
    const installation = await getInstallation(request.id);
    console.log(installation);
  };

  const handleNewClick = async () => {
    router.push('/request');
  };

  if (loading) return 'loading...';

  return (
    <ResponsiveContainer rules={mediaRules}>
      <Button variant="primary-inverse" size="small" onClick={handleNewClick}>
        + Create New...
      </Button>

      <br />
      <br />

      <Grid cols={2} gutter={[5, 2]}>
        <Grid.Row collapse="800">
          <Grid.Col>
            <Title>My Request List</Title>
            <Table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Identity Providers</th>
                  <th>Environments</th>
                  <th>Submission Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {requests.length > 0 ? (
                  requests.map((request) => {
                    return (
                      <tr key={request.id} onClick={() => setRequestId(request.id)}>
                        <td>{request.projectName}</td>
                        <td>{getProviders(request.realm)}</td>
                        <td>{request.environments?.join(', ')}</td>
                        <td>{request.createdAt}</td>
                        <td>
                          <Button size="small" onClick={() => handleInstallationClick(request)}>
                            Download Installation
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={10}>No requests found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Grid.Col>
          <Grid.Col>
            <NavTabs className="nav nav-tabs nav-justified">
              <li className="nav-item">
                <a className={`nav-link ${env === 'dev' && 'active'}`} onClick={() => setEnv('dev')}>
                  <Title>Dev</Title>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${env === 'test' && 'active'}`} onClick={() => setEnv('test')}>
                  <Title>Test</Title>
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${env === 'prod' && 'active'}`} onClick={() => setEnv('prod')}>
                  <Title>Prod</Title>
                </a>
              </li>
            </NavTabs>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </ResponsiveContainer>
  );
}

export default RequestsPage;
