import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import renderRoutes, { routes } from './routes';
import { BASENAME } from './config/constant';

const App = () => {
  return (
    <React.Fragment>
      <Router basename={BASENAME}>{renderRoutes(routes)}</Router>
    </React.Fragment>
  );
};

export default App;
