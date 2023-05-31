import './App.css';
import Registration from './components/Registration';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme( {
  palette: {
    primary: {
      main: '#F26925'
    }
  }
}

)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Registration />
      </div>
    </ThemeProvider>
  );
}

export default App;
