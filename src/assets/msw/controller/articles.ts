import { rest } from 'msw';
import jsonFile from '../../api-mocks/articles.json';
export const articlesController = [
  rest.get('/api/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(jsonFile));
  }),
];
