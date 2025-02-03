import { useEffect } from 'react';
import { HSStaticMethods } from 'preline/preline';

const Preline = () => {

  useEffect(() => {
    import('preline/preline');
  }, []);

  useEffect(() => {
    HSStaticMethods.autoInit(['overlay', 'tooltip', 'popover']);
  }, []);

  return <></>;
};

export default Preline;