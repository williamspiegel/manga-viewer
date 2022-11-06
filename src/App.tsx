import { useTranslation } from 'react-i18next';
import './App.css';
import Routing from './Routing';
function App() {
  const { t } = useTranslation();
  return (
    <div className='App'>
      <header className='App-header'>
        <Routing />
      </header>
    </div>
  );
}

export default App;
