interface Urls {
  url: string;
}

export interface Data {
  identityProviders: {
    github: boolean;
    idir: boolean;
  };
  environments: {
    dev: boolean;
    test: boolean;
    prod: boolean;
    devRedirectUrls: Urls[];
    testRedirectUrls: Urls[];
    prodRedirectUrls: Urls[];
  };
  projectName: string;
}

export interface FormattedData {
  identityProviders: string[];
  environments: string[];
  projectName: string;
  validRedirectUrls: {
    dev: string[];
    test: string[];
    prod: string[];
  };
}