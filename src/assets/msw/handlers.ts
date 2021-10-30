import { rest } from 'msw';
import { loginController } from './controller/user';
import { articlesController } from './controller/articles';
export const handlers = [...loginController, ...articlesController];
