export interface Session {
  idir_userid: string;
}

export interface Data {
  realm?: string;
  projectName: string;
  preferredEmail: string;
  newToSso: boolean;
  projectLead: boolean;
  devRedirectUrls?: string[];
  testRedirectUrls?: string[];
  prodRedirectUrls?: string[];
  agreeWithTC?: boolean;
  id?: number;
}

export interface FormattedData {
  realm?: string;
  environments: string[];
  projectName: string;
  validRedirectUrls: {
    dev: string[];
    test: string[];
    prod: string[];
  };
  id?: number;
  projectLead: boolean;
  preferredEmail: string;
  newToSso: boolean;
  agreeWithTC?: boolean;
}
