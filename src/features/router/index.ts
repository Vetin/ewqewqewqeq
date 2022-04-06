import { createBrowserHistory } from 'history';

import { createRouter } from '@shared/libs/router';

export const history = createBrowserHistory();
export const router = createRouter({ history });
