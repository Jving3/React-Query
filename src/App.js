import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './components/Home';
import Produccion from './components/Produccion';
import './index.css';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <div className='nave'>
                <nav>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/produccion'>Producción</Link>
                    </li>
                  </ul>
                </nav>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/produccion' element={<Produccion/>}/>   
                </Routes>
              </div>
            </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-rigth '/>
    </QueryClientProvider>
  )
}

export default App
