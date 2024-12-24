'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid SSR hydration issues

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
