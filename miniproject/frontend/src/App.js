import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='routes'>
      <AllRoutes/>
      </div>
    </div>
  );
}

export default App;
