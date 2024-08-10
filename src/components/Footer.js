import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[#155E59] w-full'>
                <div className='w-full max-w-[1440px] mx-auto px-20'>
                    <h1>fdkgnd</h1>
                </div>
            </div>
            <div className='bg-[#094F4A]'>
                <div className='max-w-[1440px] w-full mx-auto px-20 py-7 flex items-center justify-between'>
                    <h2 className='text-white font-normal text-sm'>©2024 OÍ MONEY - TODOS LOS DERECHOS RESERVADOS</h2>
                    <ul className='flex items-center gap-2.5'>
                        <li><a href='' className='text-white text-sm'>Política de Privacidad</a></li>
                        <li><a href='' className='text-white text-sm'>Política de Cookies</a></li>
                        <li><a href='' className='text-white text-sm'>Políticas de Uso</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer