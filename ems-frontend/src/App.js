import './App.css';
import EmployeeListComponents from './components/EmployeeListComponents';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path='/' element={<EmployeeListComponents/>}></Route>
                <Route path='/employees' element={<EmployeeListComponents/>}></Route>

                
              </Routes>
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
  );
}

export default App;
