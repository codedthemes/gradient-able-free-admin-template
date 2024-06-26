import React from 'react';

// project import
import Progress from './Progress';

// ==============================|| LOADER ||============================== //

const Loader = () => {
  return (
    <React.Fragment>
      <Progress isAnimating />
    </React.Fragment>
  );
};

export default Loader;
