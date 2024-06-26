import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// project-import
import renderRoutes, { routes } from './routes';

// ==============================|| APP ||============================== //

const App = () => {
  return <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME}>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
