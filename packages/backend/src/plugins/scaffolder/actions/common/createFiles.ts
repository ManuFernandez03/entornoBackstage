import { resolveSafeChildPath } from '@backstage/backend-plugin-api';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { writeFile } from 'fs';
import { InputError } from '@backstage/errors';

export const createNewFileAction = () => {
  return createTemplateAction<{ contents: string; filename: string; url: string }>({
    id: 'acme:file:create',
    description: 'Create an Acme file.',
    schema: {
      input: {
        required: ['contents', 'filename', 'url'],
        type: 'object',
        properties: {
          contents: {
            type: 'string',
            title: 'Contents',
            description: 'The contents of the file',
          },
          filename: {
            type: 'string',
            title: 'Filename',
            description: 'The filename of the file that will be created',
          },
          url: {
            type: 'string',
            title: 'URL',
            description: 'The url of the repository',
          },
        },
      },
    },
    async handler(ctx) {
        const { signal } = ctx;

        try {
            await writeFile(
                `${ctx.input.url}/${ctx.input.filename}`,
                ctx.input.contents,
                { signal },
                _ => { },
            );
        } catch (error) {
            throw new InputError('Failed to create file', error);
        }
    },
});
};