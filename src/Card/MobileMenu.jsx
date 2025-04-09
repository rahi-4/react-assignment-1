import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ toggleMenu }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto pt-[100px] px-6">
      
      {/* Fixed Logo & Close Button */}
      <div className="fixed top-0 left-0 w-full bg-white flex items-center justify-between px-6 py-4 shadow-md z-50">
        <img src="/logo.png" alt="Logo" className="w-[100px]" />
        <button className="text-3xl text-black" onClick={toggleMenu}>
          &times;
        </button>
      </div>

      {/* Menu Items */}
      <ul className='flex flex-col gap-4 text-zinc-700 font-Onest text-lg'>
        <li><Link to='/' onClick={toggleMenu}>Dashboard</Link></li>
        <li><Link to='/Incidents' onClick={toggleMenu}>Incidents</Link></li>
        <li><Link to='/Locations' onClick={toggleMenu}>Locations</Link></li>
        <li><Link to='/Activities' onClick={toggleMenu}>Activities</Link></li>
        <li><Link to='/Documents' onClick={toggleMenu}>Documents</Link></li>
        <li><Link to='/Cypher AI' onClick={toggleMenu}>Cypher AI</Link></li>
      </ul>

      {/* Profile Section */}
      <div className='mt-6 flex gap-3 items-center'>
        <img src="/nIcon.png" alt="" className='w-[40px] h-[40px]' />
        <img src="/Rectangle 5412.png" alt="" className='w-[40px] h-[40px]' />
        <div className='text-zinc-500'>
          <p className='text-sm font-Onest'>
            Usman Zafar <br />
            <span className='text-xs'>usmanzafar@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
