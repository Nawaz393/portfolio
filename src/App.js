
import './App.css';
import Navbar from './Navbar';
import Name  from './Name';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Skills';
import  Form  from './Form';
import Footer from './Footer';
import {Routes,Route } from "react-router-dom";
import Aboutme from './Aboutme';
import {useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
function App() {
  const location =useLocation();
  return (
  <>

 
   <Navbar/>
<AnimatePresence>
<Routes location={location} key={location.key}>
<Route path='/' element={<Name/>}/>

<Route path='/skills' element={<Skills/>}/>
<Route path='/Contact' element={<Form/>}/>
<Route path='/About' element={<Aboutme/>}/>
</Routes>
</AnimatePresence>
<Footer/>
   </>
    
  );
}

export default App;
