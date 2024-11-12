'use client';
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { IoLibrary } from "react-icons/io5";
import { FaBookOpen, FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const navElements = [
  {
    title: 'Biblioteca',
    href: '../biblioteca',
    icon: <IoLibrary className="w-6 h-6 mr-2" />,

  },
  {
    title: 'Leitura',
    href: '../leitura-atual',
    icon: <FaBookOpen className="w-6 h-6 mr-2" />,

  },
  {
    title: 'Ranking',
    href: '../ranking',
    icon: <FaTrophy className="w-6 h-6 mr-2" />,

  },
  {
    title: 'Perfil',
    href: '../perfil',
    icon: <CgProfile className="w-6 h-6 mr-2" />,

  }
]

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false)
    return(
        <div className={` bg-[#2596be] text-gray-100 flex flex-col ${isCollapsed ? "w-16" : "w-40" } transition-all duration-300 position: static  h-100vh` }>
          <div className="flex items-center justify-between g-gray-800 border-b border-white p-4">
            {
              !isCollapsed && (
                <h1 className="text-3xl font-bold text-blue-400">
                    <Link href="/"> Verbix </Link>
                </h1>
              )

              
            }
            <button onClick={() => setIsCollapsed(!isCollapsed)} 
            className="text-gray-400 focus:outline-none">
              {isCollapsed ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <nav className="mt-10">
                {
                  navElements.map((navElement) => (
                    <Link href={navElement.href} key={navElement.title}>

                      <div className={`flex items-center py-2.5 pl-4 pr-0 rounded transition duration-300 hover:bg-gray-700
                       hover:text-blue-400 ${isCollapsed ? "justify-center": ''} `}>

                        {navElement.icon}

                        <span className={`ml-2 transition-opacity duration-300 delay-200 ${isCollapsed ? 'opacity-0': 'opacity-100'}`}>
                          {!isCollapsed && navElement.title}
                        </span>
                      </div>
                    </Link>
                    
                  ))
                }
              </nav>
              <div className="mb-10 transition-opacity duration-300 delay-300">
                <Link href='../login'>
                  <button className="flex items-center py-2.5 px-4 w-full text-left rounded trasition durarion-300 hover:bg-red-700 hover: text-white">
                    <AiOutlineLogout className="w-6 h-6 mr-2" />
                    <span className={`transition-opacity durtion-300 delay-300 ${isCollapsed ? 'opacity-0': 'opacity-100'}`}>
                        {
                          !isCollapsed && 'Sair'
                        }
                    </span>
                  </button>
                </Link>
              </div>
          </div>
        </div>
    )
}
export default Sidebar 