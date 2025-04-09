import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../Card/MobileMenu';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    menuOpen ? bodyClass.add('no-scroll') : bodyClass.remove('no-scroll');
    return () => bodyClass.remove('no-scroll');
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location=useLocation();
  const isActive=(path)=>location.pathname===path;
  return (
    <div>
      <nav className='bg-zinc-200 p-[23px] h-auto'>
        <div className='flex justify-between items-center max-w-[1269px] mx-auto'>
          <img src="/logo.png" alt="Logo" className="w-[100px]" />

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
          <ul className='flex gap-9 text-zinc-500 font-Onest'>
              <li className={isActive('/')?'font-bold text-zinc-950':""}><Link to='/'>Dashboard</Link></li>
         <li className={isActive('/Incidents')?'font-bold text-zinc-950':""}><Link to='/Incidents'>Incidents</Link></li>
       <li className={isActive('/Locations')?'font-bold text-zinc-950':""}><Link to='/Locations'>Locations</Link></li>
              <li  className={isActive('/Activities')?'font-bold text-zinc-950':""}><Link to='/Activities'>Activities</Link></li>
              <li className={isActive('/Documents')?'font-bold text-zinc-950':""}><Link to='/Documents'>Documents</Link></li>
              <li className={isActive('/Cypher AI')?'font-bold text-zinc-950':""}><Link to='/Cypher AI'>Cypher AI</Link></li>
            </ul>
          </div>

          {/* Profile Section */}
          <div className='hidden lg:flex gap-2 items-center'>
            <img src="/nIcon.png" alt="" className='w-[40px] h-[40px]' />
            <img src="/Rectangle 5412.png" alt="" className='w-[40px] h-[40px]' />
            <div className='text-zinc-500'>
              <p className='text-sm font-Onest'>Usman Zafar <br /><span className='text-xs'>usmanzafar@gmail.com</span></p>
            </div>
          </div>

          {/* Hamburger */}
          <button className='lg:hidden block' onClick={toggleMenu}>
            <div className='space-y-1'>
              <span className='w-6 h-0.5 bg-black block' />
              <span className='w-6 h-0.5 bg-black block' />
              <span className='w-6 h-0.5 bg-black block' />
            </div>
          </button>

          {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
        </div>
        <hr className='text-[#71717A] mt-4' />
      </nav>
      
    </div>
  );
}

export default Navbar;
