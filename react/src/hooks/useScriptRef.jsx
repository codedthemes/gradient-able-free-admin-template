import { useRef, useEffect } from 'react';

// ==============================|| SCRIPT REF HOOK ||============================== //

const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};

export default useScriptRef;
