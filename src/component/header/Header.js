import React, { useState } from 'react'
import logo from '../../media/下載.png';
import { Link } from 'react-router-dom';
import { BsList, BsXLg } from "react-icons/bs";
const Header = () => {
     const [show_aside, set_show_aside] = useState(false);
     const show_aside_handler = () => {
          set_show_aside(x => !x);
     }
     return (
          <>
               <header className=' z-50 bg-white w-full h-[15vh] top-0 fixed flex py-8 sm:px-24 px-2 border-b-2 justify-between '>

                    <img src={logo} alt='logo' className='sm:w-[15%] w-[50%] object-contain' />
                    <div className='sm:flex hidden w-[70%] h-full items-center'>
                         <Link to={'/instruction'} className='mx-5 text-xl font-bold text-[#7A862E]'>使用說明</Link>
                         <Link to={'/payment'} className='mx-5 text-xl font-bold text-[#7A862E]'>收費方式</Link>
                         <Link to={'/info'} className='mx-5 text-xl font-bold text-[#B5CC22]'>站點資訊</Link>
                         <Link to={'/news'} className='mx-5 text-xl font-bold text-[#7A862E]'>最新消息</Link>
                         <Link to={'/events'} className='mx-5 text-xl font-bold text-[#7A862E]'>活動專區</Link>
                    </div>
                    <div className='w-[15%] flex items-center h-full justify-end px-5'>
                         <button className='sm:block hidden py-2 px-5 rounded-full text-white font-bold text-lg bg-[#B5CC22]'>登入</button>
                    </div>
                    {!show_aside ? <BsList onClick={show_aside_handler} className='text-3xl text-[#b5cc22] mr-2 ' />
                         : <BsXLg onClick={show_aside_handler} className='text-2xl text-[#b5cc22] mr-2 ' />}
               </header>
               <aside className={`${!show_aside ? ' translate-x-[-100%]' : ''} transition fixed w-screen h-[85vh] mt-[0vh] z-10 bg-[#B5CC22] `}>
                    <div className='sm:hidden flex-row'>
                         <Link to={'/instruction'} className='block m-6 text-xl font-bold text-[#fff]'>使用說明</Link>
                         <Link to={'/payment'} className='block m-6 text-xl font-bold text-[#fff]'>收費方式</Link>
                         <Link to={'/info'} className='block m-6 text-xl font-bold text-[#677510]'>站點資訊</Link>
                         <Link to={'/news'} className='block m-6 text-xl font-bold text-[#fff]'>最新消息</Link>
                         <Link to={'/events'} className='block m-6 text-xl font-bold text-[#fff]'>活動專區</Link>
                    </div>
                    <div className=' absolute bottom-5 left-5 flex'>
                         <button className='block sm:hidden py-2 px-5 bg-white rounded-full text-[#b5cc22] font-bold text-lg '>登入</button>
                    </div>
               </aside>
          </>

     )
}

export default Header