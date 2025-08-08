import React, { useState, useEffect, ReactNode } from 'react';

interface HashRouterProps {
  children: (props: {
    currentRoute: string;
    navigate: (route: string, params?: Record<string, string>) => void;
    params: URLSearchParams;
  }) => ReactNode;
}

export const HashRouter: React.FC<HashRouterProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const [params, setParams] = useState<URLSearchParams>(new URLSearchParams());

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      const [route, queryString] = hash.split('?');
      setCurrentRoute(route || '');
      setParams(new URLSearchParams(queryString || ''));
    };

    // Set initial route
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (route: string, newParams?: Record<string, string>) => {
    let hash = route;
    
    if (newParams && Object.keys(newParams).length > 0) {
      const searchParams = new URLSearchParams(newParams);
      hash += '?' + searchParams.toString();
    }
    
    window.location.hash = hash;
  };

  return <>{children({ currentRoute, navigate, params })}</>;
};