import React,{useEffect,useState} from 'react'
import account_logo from "../Assets/account_logo.png"
import Logo from "../Assets/Logo.png"
import "../css/NavBar.css"


function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 850) { handleShow(true); } 
        else handleShow(false); 
      };
      window.addEventListener('scroll', handleScroll);
    
      return () => { window.removeEventListener('scroll', handleScroll); }
    }, []);
    

  return (
    <div className={`NavBar ${show && "NavBar_black"}`}>

    <img className='Logo' src={Logo} alt='logo' />

    <img className='account_logo' src={account_logo} alt='logo' />

    </div>
  )
}

export default NavBar