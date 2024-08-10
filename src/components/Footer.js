import React from 'react'
import FooterLogo from '../assets/footer-logo.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Twitter from '../assets/twitter.svg'

const Footer = () => {
    return (
        <>
            <div className='bg-[#155E59] w-full px-2 sm:px-5'>
                <div className='w-full max-w-[1240px] mx-auto py-16 flex md:items-start gap-12 items-center md:flex-row flex-col px-8 md:px-0'>
                    <div className='flex md:items-start items-center justify-center flex-col gap-10 md:border-r border-b md:border-b-0 pb-[60px] md:pb-0 md:pr-[70px] md:w-[300px] w-full py-2'>
                        <img src={FooterLogo} alt='Footer Logo' />
                        <div className='flex items-center gap-3'>
                            <a href='/'><img src={Facebook} alt='Face' width={40} height={40}/></a>
                            <a href='/'><img src={Instagram} alt='Face' width={40} height={40}/></a>
                            <a href='/'><img src={Whatsapp} alt='Face' width={40} height={40}/></a>
                            <a href='/'><img src={Twitter} alt='Face' width={40} height={40}/></a>
                        </div>
                    </div>
                    <div className='flex items-start justify-between lg:flex-nowrap flex-wrap md:flex-row flex-col gap-6 lg:gap-4 md:pl-[70px] w-full'>
                        <ul className='text-white'>
                            <h3 className='pb-5 text-base font-bold'>BLOG</h3>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>¿Qué hago si mis ingresos bajan?</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Las 7 mejores apps para controlar tus finanzas</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Presupuestos flexibles y fijos</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Clasifica tus gastos de manera efectiva</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Los millennials ya nbo nos podremos pensionar</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Consejos para solicitar un préstamo personal</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Consejos para solicitar un préstamo personal</li>
                        </ul>
                        <ul className='text-white'>
                            <h3 className='pb-5 text-base font-bold'>OÍ MONEY</h3>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Homepage</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Comparador</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Sobre nosotros</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>Contáctanos</li>
                        </ul>
                        <ul className='text-white'>
                            <h3 className='pb-5 text-base font-bold'>CONTACTO</h3>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>+34 123456789</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>oimoney@business.com</li>
                            <li className='list-disc ml-4 pb-2 text-xs sm:text-sm font-normal leading-[21px]'>localidad, av, ciudad.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-[#094F4A] w-full px-2 sm:px-5'>
                <div className='max-w-[1240px] w-full mx-auto py-7 gap-3 flex items-center md:flex-row flex-col justify-between'>
                    <h2 className='text-white font-normal text-xs sm:text-sm text-center'>©2024 OÍ MONEY - TODOS LOS DERECHOS RESERVADOS</h2>
                    <ul className='flex items-center gap-2.5 sm:flex-row flex-col'>
                        <li><a href='/' className='text-white text-xs sm:text-sm leading-[26px]'>Política de Privacidad</a></li>
                        <li><a href='/' className='text-white text-xs sm:text-sm leading-[26px]'>Política de Cookies</a></li>
                        <li><a href='/' className='text-white text-xs sm:text-sm leading-[26px]'>Políticas de Uso</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer