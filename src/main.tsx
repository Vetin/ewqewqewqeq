import { allSettled, fork } from 'effector';
import { render } from 'react-dom';

import { App } from '@app/index';

import { appStarted } from '@features/app-started';

const scope = fork();

allSettled(appStarted, { scope }).then(() => {
  render(<App />, document.getElementById('root'));
});
