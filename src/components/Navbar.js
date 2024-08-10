import React from 'react'
import Logo from '../assets/logo.svg'
import SearchIcon from '../assets/icons/search.svg'

const Navbar = () => {
  return (
    <div className='bg-[#155E59] w-full h-[67px] flex items-center'>
        <div className='flex items-center justify-between w-full max-w-[1440px] mx-auto  px-20 '>
            <div>
                <img src={Logo} alt='Logo' width={17} height={25} />
            </div>
            <div>
                <ul className='flex items-center gap-7 text-white'>
                    <li><a href='/' className='text-[13px] font-bold'>Tarjetas de Crédito</a></li>
                    <li><a href='' className='text-[13px] font-bold'>Reseñas de Tarjetas</a></li>
                    <li><a href='/comparador' className='text-[13px] font-bold'>Comparador</a></li>
                    <li><a href='/blog' className='text-[13px] font-bold'>Blog</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-2.5'>
                <button className='px-3 py-2 rounded-[10px] bg-white'>
                    <img src={SearchIcon} alt='SearchIcon' width={18} height={18} />
                </button>
                <button className='py-2 px-2.5 rounded-[10px] bg-white border border-[#155E59] text-[#155E59] text-sm font-medium'>Suscríbete</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar