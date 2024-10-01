import React, { createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';



// Create a Context for the mode and setMode
export const ThemeModeContext = createContext();

export default function Theme({ children }) {
  const [mode, setMode] = useState(localStorage.getItem("currentMode") || "light");

  useEffect(() => {
    localStorage.setItem("currentMode", mode);
  }, [mode]);

  const darkTheme = createTheme({
    palette: {
      mode,
        ...(mode === "light"
          ? {
              colors: {
                main: '#566573',
                card: '#bdbdbd',
                grayed: '#eeeeee',
              },
            }
          : {
              colors: {
                main: '#f1c40f',
                card: '#424242',
                grayed: '#212121',
              },
            }
        ),
    },
  });

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
