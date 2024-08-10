import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import SearchIcon from '../assets/icons/search.svg';
import MenuIcon from '../assets/icons/menu.svg';
// import CloseIcon from '../assets/icons/close.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='bg-[#155E59] w-full h-[67px] flex items-center px-3 sm:px-5'>
            <div className='flex items-center justify-between w-full max-w-[1240px] mx-auto'>
                <button className='md:hidden block' onClick={toggleMenu}>
                    <img src={menuOpen ? MenuIcon : MenuIcon} alt='Menu' />
                </button>

                <img src={Logo} alt='Logo' width={17} height={25} />

                <div className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-7 text-white'>
                        <li><a href='/' className='text-[13px] font-bold'>Tarjetas de Crédito</a></li>
                        <li><a href='/' className='text-[13px] font-bold'>Reseñas de Tarjetas</a></li>
                        <li><a href='/comparador' className='text-[13px] font-bold'>Comparador</a></li>
                        <li><a href='/blog' className='text-[13px] font-bold'>Blog</a></li>
                    </ul>
                </div>

                <div className='hidden md:flex items-center gap-2.5'>
                    <button className='px-3 py-2 rounded-[10px] bg-white'>
                        <img src={SearchIcon} alt='SearchIcon' width={18} height={18} />
                    </button>
                    <button className='py-2 px-2.5 rounded-[10px] bg-white border border-[#155E59] text-[#155E59] text-sm font-medium'>Suscríbete</button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className='absolute top-[67px] left-0 w-full bg-white z-10 py-10 shadow-2xl border-[#155E59] border-b'>
                        <ul className='flex flex-col items-center gap-4 text-black'>
                            <li><a href='/' className='text-[13px] font-bold'>Tarjetas de Crédito</a></li>
                            <li><a href='/' className='text-[13px] font-bold'>Reseñas de Tarjetas</a></li>
                            <li><a href='/comparador' className='text-[13px] font-bold'>Comparador</a></li>
                            <li><a href='/blog' className='text-[13px] font-bold'>Blog</a></li>
                        </ul>
                        <div className='flex items-center justify-center mt-10'>
                            <button className='py-2 px-2.5 rounded-[10px] bg-white border border-[#155E59] text-[#155E59] text-sm font-medium'>Suscríbete</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
