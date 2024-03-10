import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './chakra/theme';
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

//PAGES
import HomePage from "./pages/home.page"
import DetailPage from './pages/detail.page';
import store from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>
);
