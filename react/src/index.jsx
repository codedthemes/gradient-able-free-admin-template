import React from 'react';
import { createRoot } from 'react-dom/client';

// styles
import './index.scss';

// projct import
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from './contexts/ConfigContext';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);

reportWebVitals();
