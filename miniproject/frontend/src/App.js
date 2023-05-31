import './App.css';
import LargeWithAppLinksAndSocial from './Component/Footer';
import Navbar from './Component/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='routes'>
      <AllRoutes/>
      </div>
      <LargeWithAppLinksAndSocial/>
    </div>
  );
}

export default App;
