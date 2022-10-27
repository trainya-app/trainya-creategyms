import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';
import '../../styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
