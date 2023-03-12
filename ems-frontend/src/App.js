import './App.css';
import EmployeeListComponents from './components/EmployeeListComponents';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
        <EmployeeListComponents/>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
