export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Cardano Open Source Index',
  type: 'object',
  definitions: {
    project: {
      type: 'object',
      properties: {
        projectLogo: { type: 'string' },
        projectName: { type: 'string' },
        openSource: { type: 'string' },
        plutusVersion: { type: 'string' },
        link: { type: 'string', format: 'uri' },
        reference: { type: 'string' },
      },
      required: ['projectName', 'openSource'],
    },
  },
  properties: {
    logos: {
      type: 'object',
      additionalProperties: { type: 'string', format: 'uri' },
    },
    fullOpenSource: {
      type: 'array',
      items: { $ref: '#/definitions/project' },
    },
    partialOpenSource: {
      type: 'array',
      items: { $ref: '#/definitions/project' },
    },
    closedSource: {
      type: 'array',
      items: { $ref: '#/definitions/project' },
    },
    unknown: {
      type: 'array',
      items: { $ref: '#/definitions/project' },
    },
  },
  required: ['logos', 'fullOpenSource', 'partialOpenSource', 'closedSource', 'unknown'],
} as const