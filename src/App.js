
import './App.css';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Header from './components/Navbar';
 import { Route ,Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Registration from './components/SinUp'
function App() {
  return (
    <>
    <Header/>
    <Routes>
     {/* <Route path='/'  element={<Header/>}/>  */}
     <Route path='/'  element={<HomePage/>}/> 
     <Route path='/Login'  element={<Login/>}/> 
     <Route path='/signup'  element={<Registration/>}/> 
     <Route path='/*'  element={<NotFound/>}/> 
    
   
    </Routes>
    </>
  );
}

export default App;
