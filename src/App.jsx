import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Sidenav from './components/sidenav/index';
import Toolbar from './components/toolbar/index';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className='app'>
            <Sidenav />

            <main className='content'>
              <Toolbar />
              <Outlet />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
