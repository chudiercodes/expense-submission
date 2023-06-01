import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import { createTheme, ThemeProvider } from '@mui/material';

import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

const theme = createTheme( {
    palette: {
        primary: {
            main: '#F26925'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Registration />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </Router>   
        </ThemeProvider>
    );
}

export default App;
