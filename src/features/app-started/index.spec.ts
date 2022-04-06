import { is } from 'effector';

import { appStarted } from './index';

describe('appStated', () => {
  it('is event', () => {
    expect(is.event(appStarted)).toBeTruthy();
  });
});
