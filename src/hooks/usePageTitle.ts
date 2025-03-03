import { useEffect } from 'react';

const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    document.title = `${pageTitle} | BareGlow`;
  }, [pageTitle]);
};

export default usePageTitle; 