import { JSONSchema6 } from 'json-schema';
import { redirectUriItems, redirectUriTooltipInfo } from './shared/providers';

export default {
  type: 'object',
  properties: {
    devValidRedirectUris: {
      type: 'array',
      title: 'Development',
      items: redirectUriItems,
      additionalItems: redirectUriItems,
      default: [''],
      ...redirectUriTooltipInfo,
    },
    testValidRedirectUris: {
      type: 'array',
      title: 'Test',
      items: redirectUriItems,
      additionalItems: redirectUriItems,
      default: [''],
      ...redirectUriTooltipInfo,
    },
    prodValidRedirectUris: {
      type: 'array',
      title: 'Production',
      items: redirectUriItems,
      additionalItems: redirectUriItems,
      default: [''],
      ...redirectUriTooltipInfo,
    },
  },
} as JSONSchema6;
