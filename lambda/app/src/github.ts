// migrate GitHub lambda here and call GitHub API directly to avoid multiple invocations.
// see https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html
const { Octokit } = require('octokit');
import { stringifyGithubInputs } from './utils/helpers';

const octokit = new Octokit({ auth: process.env.GH_ACCESS_TOKEN });

interface ValidRedirectUris {
  dev: string[];
  test: string[];
  prod: string[];
}
interface GitHubRequestDispatchInput {
  requestId: number;
  clientName: string;
  realmName: string;
  validRedirectUris: ValidRedirectUris;
  environments: string[];
  publicAccess: boolean;
}

export const dispatchRequestWorkflow = async (formData: GitHubRequestDispatchInput) => {
  console.log('requesting github request workflow', stringifyGithubInputs(formData));

  // see https://docs.github.com/en/rest/reference/actions#create-a-workflow-dispatch-event
  // sample successful response
  // {
  //   "status": 204,
  //   "url": "https://api.github.com/repos/bcgov/sso-terraform-dev/actions/workflows/request.yml/dispatches",
  //   "headers": {
  //       "access-control-allow-origin": "*",
  //       "access-control-expose-headers": "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, Deprecation, Sunset",
  //       "connection": "close",
  //       "content-security-policy": "default-src 'none'",
  //       "date": "Tue, 10 Aug 2021 17:07:37 GMT",
  //       "referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
  //       "server": "GitHub.com",
  //       "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
  //       "vary": "Accept-Encoding, Accept, X-Requested-With",
  //       "x-accepted-oauth-scopes": "",
  //       "x-content-type-options": "nosniff",
  //       "x-frame-options": "deny",
  //       "x-github-media-type": "github.v3; format=json",
  //       "x-github-request-id": "1234:58DE:1673AFF:40BA874:6112B259",
  //       "x-oauth-scopes": "repo, workflow, write:packages",
  //       "x-ratelimit-limit": "5000",
  //       "x-ratelimit-remaining": "4999",
  //       "x-ratelimit-reset": "1628618857",
  //       "x-ratelimit-resource": "core",
  //       "x-ratelimit-used": "1",
  //       "x-xss-protection": "0"
  //   }
  // }
  return octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: process.env.GH_OWNER,
    repo: process.env.GH_REPO,
    workflow_id: process.env.GH_WORKFLOW_ID,
    ref: process.env.GH_BRANCH,
    inputs: stringifyGithubInputs(formData),
  });
};

export const closeOpenPullRequests = async (id: number) => {
  try {
    const labels = ['auto_generated', 'request', String(id)];

    // delete all open issues with the target client
    const issuesRes = await octokit.rest.issues.listForRepo({
      owner: process.env.GH_OWNER,
      repo: process.env.GH_REPO,
      state: 'open',
      labels: labels.join(','),
    });

    await Promise.all(
      issuesRes.data.map((issue) => {
        return octokit.rest.issues.update({
          owner: process.env.GH_OWNER,
          repo: process.env.GH_REPO,
          issue_number: issue.number,
          state: 'closed',
        });
      }),
    );
    return [true, null];
  } catch (err) {
    return [null, err];
  }
};
