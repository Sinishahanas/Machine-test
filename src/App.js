import './App.css';
import Navbar1 from './Components/Navbar/Navbar1';
import {Routes, Route} from 'react-router-dom'
import Input from './Components/Input/Input'
import Toggle from './Components/Task 2-Toggle/Toggle'
import View from './Components/Task 1-Pagination/View';
import Parent from './Components/Task 4-ParentChild/Parent';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Navbar1/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='pagination' element={<View/>}/>
      <Route path='input' element={<Input/>}/>
      <Route path='toggle' element={<Toggle/>}/>
      <Route path='parentChild' element={<Parent/>}/>
      </Routes>
    </div>
  );
}

export default App;
