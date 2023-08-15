"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavLinks } from '@/constant';
import HamburgerMenu from 'react-hamburger-menu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar flex justify-between mt-9 items-start'>
      {/* Logo and Hamburger Menu */}
      <div className={`flex items-center m-2.5	 gap-10 ${isMenuOpen ? 'flex-col py-5 transition-all slide-in-from-top-3': 'flex'}`}>
        <Link href='/'>
          <Image src='/logo.svg' width={116} height={43} alt='logo' />
        </Link>

        {/* Hamburger Menu */}
        <div className='xl:hidden '>
          <HamburgerMenu
            isOpen={isMenuOpen}
            menuClicked={toggleMenu}
            width={25}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>

        {/* NavLinks */}
        <ul className={`xl:flex text-small gap-7 ${isMenuOpen ? 'flex flex-col items-end text-center m-5 ' : 'hidden'}`}>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              <li onClick={() => setIsMenuOpen(false)}>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
