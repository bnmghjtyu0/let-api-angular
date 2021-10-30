import { rest } from 'msw';
import jsonFile from '../../api-mocks/articles.json';
export const loginController = [
  rest.get('/api/userlist', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        retCode: 1,
        retMsg: '登入成功',
        retVal: { userlist: [{ username: 'richard' }] },
      })
    );
  }),
];
