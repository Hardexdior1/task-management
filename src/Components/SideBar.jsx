import React, { useState } from 'react'
import user from "../images/Nike 1.png"
import { Link } from 'react-router-dom'
const SideBar = () => {
    const [active,setActive]=useState("dashboard")
  return (
    <div className='py-10'>

    <center className='border-b  mb-10 pb-20'> 
        <div>
        <div >
        <img src={user} alt="user-img" className='rounded-full h-20 w-20 border' />
        </div>
        <h1 className='font-bold text-2xl'> Hey, Ade  </h1>
        </div>
    </center>


    <div className='grid gap-3 p-4'>
        <Link onClick={(()=>{
            setActive("dashboard")
        })}  className={active=="dashboard"?' font-bold text-lg p-2 rounded-md bg-black text-white':"text-black p-2 border text-lg font-bold rounded-md"}  to="/"> <button>Dashboard</button> </Link>
        <Link onClick={(()=>{
            setActive("create")
        })}  className={active=="create"?' font-bold text-lg p-2 rounded-md bg-black text-white':"text-black p-2 border text-lg font-bold rounded-md"}  to="/create-project"> <button>New project </button> </Link>

    </div>
    </div>
  )
}

export default SideBar