import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Consultancy from './Components2/Consultancy'
import Contract from './Component3/Contract';
import Insurance from './Component4/Insurance';
import About from './Component5/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consultancy' element={<Consultancy/>}/>
          <Route path='/contract' element={<Contract/>}/>
          <Route path = '/insurance' element={<Insurance/>}/>
          {/* <Routes path = '/about' element={<About/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
