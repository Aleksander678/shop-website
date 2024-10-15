import React from 'react'
import Link from 'next/link'
import { IoCart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar bg-base-100 py-0'>
        <span className='navbar-start font-extrabold cursor-pointer'>Logo</span>
        <input type="text" placeholder='Search...' className='input input-bordered input-primary input-sm w-full max-w-xl mx-5 navbar-center'/>
        <div className='navbar-end *:mx-2'>

          
            <Link href={""}><IoCart />
            </Link>
            <Link href={""}><FaHeart />
            </Link>
            <Link href={""}><FaUserCircle />
            </Link>
        </div>
    </div>
  )
}

export default Navbar