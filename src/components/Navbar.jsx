import React, { useState } from 'react'
import {FaBars ,FaTimes ,FaGithub, FaLinkedin , FaBehance} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'



function Navbar() {

  const [nav , setNavb]=useState(false)
 const handleClick = () => setNavb(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]   text-gray-300'>
     <div><img src={Logo} alt="Logo Image"  style={{width:'50px'}} />
     </div> 
   

{/*Menue */}
   <div className='hidden md:flex'>
    <ul className='hidden md:flex'  >
      <li className='hover:underline decoration-[#457b9d]  '> 
      <Link to="home" smooth={true} duration={500} >
          Home
        </Link>
        </li>
      <li className='hover:underline decoration-[#457b9d]'>
        <Link to="about" smooth={true} duration={500} >
          About
        </Link>
        </li>  
      <li className='hover:underline decoration-[#457b9d]'>
        <Link to="skills" smooth={true} duration={500} >
          Skills
        </Link>
      </li>
      <li className='hover:underline decoration-[#457b9d]'>
        <Link to="work" smooth={true} duration={500} >
         Work
        </Link>
      </li>
      <li className='hover:underline decoration-[#457b9d]'>
        <Link to="contact" smooth={true} duration={500} >
          Contact
        </Link>
      </li>
    </ul>
   </div>


{/* Hamburger   \\ z-10 is used for showing the svg icons because it gonna be hidden while you put bg for mobile menue*/}
<div onClick={handleClick}  className='md:hidden z-10 Hamburger  '>
 {!nav ?  <FaBars />  :   <FaTimes />}
</div>



{/* Mobile Menue */}
   
     <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center  items-center'} >
      <li className='py-6 text-4xl  hover:underline decoration-[#457b9d]'>
             <Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link>
      </li>
      <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
             <Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link>
        </li>  
      <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link>
      </li>
      <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
             <Link onClick={handleClick} to="work" smooth={true} duration={500} >
         Work
        </Link>
      </li>
      <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
         <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
        </Link>
      </li>
    </ul> 




{/* Social Icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
  <li className='h-10  w-[160px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#0076B3]'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://www.linkedin.com/in/shajwan-namiq-5bb90020b/" rel="noopener noreferrer" target="_blank" >
     Linkedin <FaLinkedin  size={30}/>
    </a>
  </li>




  <li className='h-10 w-[160px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-slate-800'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://github.com/Shajwan-Namiq" rel="noopener noreferrer" target="_blank" >
     Github <FaGithub  size={30}/>
    </a>
  </li>



  <li className='h-10 w-[160px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-red-600'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" rel="noopener noreferrer" target="_blank" >
     Email <HiOutlineMail  size={30}/>
    </a>
  </li>

<li className='h-10 w-[160px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://www.behance.net/shajwannamiq" rel="noopener noreferrer" target="_blank" >
     Behance <FaBehance  size={30}/>
    </a>
  </li>




  <li className='h-10 w-[160px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-green-800'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="#" rel="noopener noreferrer" target="_blank" >
     Resume <BsFillPersonLinesFill  size={30}/>
    </a>
  </li>



</ul>
</div>





   
   
   
    </div>


  )
}

export default Navbar 
 