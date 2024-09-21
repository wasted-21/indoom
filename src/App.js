import './App.css';
import Main from './components/main';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  // تعيين الثيم الابتدائي بناءً على قيمة localStorage أو "light" إذا لم تكن موجودة
  const [themes, setThemes] = useState(localStorage.getItem("currentMode") || "light");

  // حفظ الثيم الجديد في localStorage عند تغييره
  useEffect(() => {
    localStorage.setItem("currentMode", themes);
  }, [themes]);

  // إنشاء الثيم بناءً على الحالة الحالية
  const darkTheme = createTheme({
    palette: {
      mode: themes, // "light" أو "dark" بناءً على الحالة
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Main setThemes={setThemes} /> {/* تمرير setThemes لتغيير الثيم من داخل المكون الرئيسي */}
      </ThemeProvider>
    </div>
  );
}

export default App;
