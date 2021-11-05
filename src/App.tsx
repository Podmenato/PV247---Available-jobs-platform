import React from 'react';
import {ThemeProvider} from '@mui/material'
import {theme} from 'theme'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {EPaths} from 'enums/EPaths'
import Home from 'components/Home'

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route
                    path={EPaths.HOME} element={<Home/>}
                />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
