import './App.css';
import Home from './components/Home/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
