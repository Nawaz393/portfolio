
import './App.css';
import Navbar from './Navbar';
import Name  from './Name';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './Skills';
import  Form  from './Form';
import Footer from './Footer';
import {Routes,Route } from "react-router-dom";
import Aboutme from './Aboutme';
import LoginForm from './LoginForm';
import {useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import AdminDashBoard from './AdminDashBoard';
import UserReg from './UserReg';
import AddSkills  from './AddSkills';
import ChangePic from './ChangePic';
import ChangeQuote from './ChangeQuote';
import ChangeAboutMe from './ChangeAboutMe';
import UpdDelSkill from './UpdDelSkill';
import AddProject from './AddProject';
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
<Route path='/Projects' element={<AddProject/>}></Route>
<Route path='/admin' element={<LoginForm/>}/>

<Route path='/AdminDashboard' element={<AdminDashBoard/>}></Route>
<Route path='/RegisterUser' element={<UserReg/>}></Route>
<Route path='/AddSkill' element={<AddSkills/>}></Route>
<Route path='/ChangePic' element={<ChangePic/>}></Route>
<Route path='/ChangeAboutMe' element={<ChangeAboutMe/>}></Route>
<Route path='/ChangeQuote' element={<ChangeQuote/>}> </Route>
<Route path='/UpdateDeleteSkill' element={<UpdDelSkill/>}></Route>
</Routes>
</AnimatePresence>
<Footer/>
   </>
    
  );
}

export default App;
