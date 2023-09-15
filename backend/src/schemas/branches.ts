export const branchesSchema = {
    querystring: {
      type: 'object',
      required: ['owner', 'repo'],
      additionalProperties: false,
      properties: {
        owner: { type: 'string' },
        repo: { type: 'string' }
      }
    }
  }