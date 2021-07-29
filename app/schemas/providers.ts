import { JSONSchema6 } from 'json-schema';

export const urlPattern = `^https?:\\/\\/\\w+(\\.\\w+)*(:[0-9]+)?\\/?$`;

export default {
  type: 'object',
  required: ['devValidRedirectUris', 'testValidRedirectUris', 'prodValidRedirectUris', 'realm'],
  properties: {
    realm: {
      type: 'string',
      title: 'Identity Providers Required',
      enum: ['onestopauth', 'bceidbasic', 'bceidbusiness', 'bceidboth'],
      enumNames: [
        'IDIR/GitHub',
        'IDIR/GitHub + BCeID Basic (coming soon)',
        'IDIR/GitHub + BCeID Business (coming soon)',
        'IDIR/GitHub + BCeID Both (coming soon)',
      ],
      default: 'onestopauth',
    },
    devValidRedirectUris: {
      type: 'array',
      description: 'You can use any valid URI for your redirect URIs.',
      title: 'Dev Redirect URIs',
      items: { type: 'string', pattern: urlPattern },
      additionalItems: { type: 'string', pattern: urlPattern },
      default: [''],
    },
    testValidRedirectUris: {
      type: 'array',
      title: 'Test Redirect URIs',
      items: { type: 'string', pattern: urlPattern },
      additionalItems: { type: 'string', pattern: urlPattern },
      default: [''],
    },
    prodValidRedirectUris: {
      type: 'array',
      title: 'Prod Redirect URIs',
      items: { type: 'string', pattern: urlPattern },
      additionalItems: { type: 'string', pattern: urlPattern },
      default: [''],
    },
  },
} as JSONSchema6;
