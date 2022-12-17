import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faBars} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
 const [toggle,settoggle]=useState(false);


        
    const item =
    [
    { page: "Home", link: "/" },
    { page: "Skills", link: "skills" },
    { page: "Contact Me", link: "contact" },
    { page: "About Me", link: "About" },
  ];

  const sidebsritem=item.map(item=>{

return(


    <li className= ' border-0 shadow-slate-800 shadow-lg rounded-full py-1 my-1  ' key={item.link}> <Link className='no-underline text-slate-200 md:text-lg text-sm md:font-semibold tracking-tighter font-Nunito' to={item.link}>{item.page}</Link></li>
)


  })

    return (
        
        
        <aside className=  'mt-3  h-screen  sm:w-36 sm:bg-slate-800 rounded-r-lg relative' >
            <button className='mx-1 sm:hidden' onClick={()=>{settoggle(!toggle)}} ><FontAwesomeIcon icon={faBars}  size="lg" color="white" /></button>
            <ul className={ toggle?'flex flex-col items-start py-6  ':"sm:flex flex-col py-6  hidden"}>
                

              {sidebsritem}
            </ul>
        </aside>
       
    );
}

export default Sidebar;
