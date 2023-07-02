import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import ContextPassData from './context/ContextPassData';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextPassData>
        <RouterProvider router={router}></RouterProvider>
      </ContextPassData>
    </QueryClientProvider>
  </React.StrictMode>
);
