import { Provider as ReduxProvider } from 'react-redux';

import { appStore } from '@entities/app-store';

import { Pages } from './pages';
import styles from './style.css';

export const App = () => {
  return (
    <ReduxProvider store={appStore}>
      <div className={styles.app}>
        <Pages />
      </div>
    </ReduxProvider>
  );
};
