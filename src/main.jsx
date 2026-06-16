import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import {AuthProvider} from './context/Context.jsx'
import {BrowserRouter} from "react-router-dom";
import { store } from "./store/index.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      gcTime: 1000 * 60 * 10,    
      refetchOnWindowFocus: true, 
    },
  },
});
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)