import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  let [open, setopen] = useState(false);
  const menus = [
    {
      name: 'HOME',
      link: '/',
    },
    {
      name: 'DESTINATION',
      link: '/destination',
    },
    {
      name: 'CREW',
      link: '/crew',
    },
    {
      name: 'TECHNOLOGY',
      link: '/technology',
    },
  ];
  return (
    <nav className="flex items-center justify-between pt-5">
      <div>
      <Link href="/">
    
        
      <Image
        width={30}
        height={30}
        alt="hamburger"
        src={
          open
            ? '/assets/space-tourism-website-main/starter-code/assets/shared/icon-close.svg'
            : '/assets/space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg'
        }
        className="md:hidden  fixed right-5 cursor-pointer z-20 top-6"
        onClick={() => setopen(!open)}
      />
      <Image
        width={100}
        height={100}
        alt="logo"
        src="/assets/space-tourism-website-main/starter-code/assets/shared/logo.svg"
        className="w-10 ml-7"
          />
      </Link>
      </div>
      <ul
        className={`bg-[#ffffff14] backdrop-blur-md  md:pl-10 pr-28 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
          !open ? 'right-[-100%] ' : 'right-0'
        }`}
      >
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300
           
            `}
          >
            <Link
              href={menu.link}
              className="text-white cursor-pointer  text-sm inline-block md:py-5 py-3"
            >
              <span className="font-bold mr-1.5">0{index}</span> {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
