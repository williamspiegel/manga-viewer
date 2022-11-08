import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Routing from './Routing';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  );
}

export default App;
