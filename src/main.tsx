import 'normalize.css';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/scss/index.scss';
import { Main } from './components/Main';

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient} >
    <Main />
  </QueryClientProvider>
)
