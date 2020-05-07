import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import store from './store';
import { mainTheme } from './assets/styles/theme';
import Root from './views/Root';
import GlobalStyle from './assets/styles/globalStyles';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <>
        <GlobalStyle />
        <Root />
      </>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
