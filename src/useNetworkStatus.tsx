import React from 'react';

export const useNetworkStatus = () => {
  const [status, setStatus] = React.useState(navigator.onLine);
  const [offlineAt, setOfflineAt] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    const handleOnline = () => {
      setStatus(true);
      setOfflineAt(undefined);
    };

    const handleOffline = () => {
      setStatus(false);
      setOfflineAt(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    online: status,
    offlineAt,
  };
};
