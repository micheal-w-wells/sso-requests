export interface Request {
  id: number;
  idirUserid: string;
  projectName: string;
  realm: string;
  identityProviders?: string[];
  validRedirectUrls: {
    dev?: string[];
    test?: string[];
    prod?: string[];
  };
  prNumber: number;
  environments: string[];
  prSuccess: boolean;
  planSuccess: boolean;
  applySuccess: boolean;
  prCreatedAt: string;
  planRuntime: string;
  applyRuntime: string;
  createdAt: string;
  updatedAt: string;
  status?: string;
}
