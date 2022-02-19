import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/Home.page';
import KpiPage from './components/Kpi.page';
import RQKpiPage from './components/RQKpi.page';
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
                  <Link to='/kpi'>Kpi Page</Link>
                </li>
                <li>
                  <Link to='/rq-kpi'>RQ Kpi Page</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/kpi' element={<KpiPage/>}/>
              <Route path='/rq-kpi' element={<RQKpiPage/>}/>   
            </Routes>
          </div>
        </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
