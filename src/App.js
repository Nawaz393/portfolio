
import './App.css';
import Navbar from './components/Navbar';
import Name  from './pages/Name';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './pages/Skills';
import  Form  from './pages/Form';
import Footer from './components/Footer';
import {Routes,Route } from "react-router-dom";
import Aboutme from './pages/Aboutme';
import LoginForm from './pages/LoginForm';
import {useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import AdminDashBoard from './pages/AdminDashBoard';
import UserReg from './pages/UserReg';
import AddSkills  from './pages/AddSkills';
import ChangePic from './pages/ChangePic';
import ChangeQuote from './pages/ChangeQuote';
import ChangeAboutMe from './pages/ChangeAboutMe';
import UpdDelSkill from './pages/UpdDelSkill';
import Addprojects from './pages/Addprojects';
import Project from "./pages/Project"
import RequireAuth from './pages/RequireAuth';
import DisplayUser from './pages/DisplayUser';
import UpdDelProjects from './pages/UpdDelProjects';
import NotRoute from './pages/NotRoute';
import ChangePassword from './pages/changePassword';
import NotAuthorized from './pages/NotAuthorized';
import Loading from './components/loading';
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
<Route path='/Projects' element={<Project/>}></Route>
<Route path='/admin' element={<LoginForm/>}/>
<Route path='/load' element={<Loading/>}/>
<Route element={<RequireAuth/>}>
<Route path='/AdminDashboard' element={<AdminDashBoard/>}></Route>
<Route path='/RegisterUser' element={<UserReg/>}></Route>
<Route path='/AddSkill' element={<AddSkills/>}></Route>
<Route path='/ChangePic' element={<ChangePic/>}></Route>
<Route path='/ChangeAboutMe' element={<ChangeAboutMe/>}></Route>
<Route path='/ChangeQuote' element={<ChangeQuote/>}> </Route>
<Route path='/UpdateDeleteSkill' element={<UpdDelSkill/>}></Route>
<Route path='/Addproject' element={<Addprojects/>}></Route>
<Route path='updateDeleteProject' element={<UpdDelProjects/>}></Route>
<Route path="/users" element={<DisplayUser/>}></Route>
<Route path='/updatepassword' element={<ChangePassword/>}></Route>
</Route>


<Route path='*' element={<NotRoute/>}></Route>
<Route path="/unauthorized" element={<NotAuthorized/>}></Route>
</Routes>
</AnimatePresence>
<Footer/>
   </>
    
  );
}

export default App;
