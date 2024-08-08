import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import './App.css';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';

const App = () => {
  return ( 
<div className="App"> 
    <NavBar/>
    <Routes>
    <Route path ='/' element={<Main/>} />
    <Route path='/about' element={<About/>} />
    <Route path='contacts/:id' element={<Contacts />} />
   </Routes> 
   </div>
  )
};
export default App;
