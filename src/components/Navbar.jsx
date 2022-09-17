import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsBehance, BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>    
        <input type="image"   src={Logo} alt="photo" style={{width: '50px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:underline decoration-[#457b9d]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:underline decoration-[#457b9d]'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:underline decoration-[#457b9d]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:underline decoration-[#457b9d]'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:underline decoration-[#457b9d]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
        
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:underline decoration-[#457b9d]'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#457b9d]'>
            <a target="_blank"  rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/shajwan-namiq-5bb90020b/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#292828]'>
            <a target="_blank"  rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Shajwan-Namiq'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ae251b]'>
            <a   target="_blank"  rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhHDFCpHCxssgZGcvGCFbPjtRcdzDhCQMzBrjzbPfBVvBWzGqDghnrVzfNgPcCQmcBML'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

         <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d1bae]'>
            <a   target="_blank"  rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.behance.net/shajwannamiq'
            >
              Behance <BsBehance size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a7649]'>
            <a  target="_blank"  rel="noreferrer"
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
