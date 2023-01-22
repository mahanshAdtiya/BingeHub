import React,{useEffect,useState} from 'react'
import account_avatar from "../Assets/account_avatar.png"
import Logo from "../Assets/Logo.png"
import { Link} from 'react-router-dom';
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

      {/* <div className='NavBar_options'>

        <Link  to="/Movies" className='NavBar_links'> <h3>Movies</h3> </Link>

      </div> */}

      <img className='account_avatar' src={account_avatar} alt='logo' />

    </div>
  )
}

export default NavBar