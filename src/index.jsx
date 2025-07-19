import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';

// Wrap app in Root component to allow theme toggle
const Root = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App toggleTheme={() => setIsDark((prev) => !prev)} isDark={isDark} />
      </ThemeProvider>
    </Provider>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 
root.render(<Root />);
