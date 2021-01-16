import React, { FC, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from '~/store';

export interface AppProps {
  Component: FC<any>;
  pageProps: ReactNode;
}

const store = createStore();

const App: FC<AppProps> = ({ Component, pageProps }) => {
  if (!store) return <div>Loading . . .</div>;
  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  );
};

App.defaultProps = {
  Component: (f) => f,
  pageProps: {}
};

export default App;
