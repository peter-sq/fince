import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

