import React from 'react'
import PexelsKampus from '../../assets/pexels-kampus.svg'

const Description = () => {
  return (
    <div className='w-full'>
        <div className='bg-img mb-[60px] px-[25px]'>
            <div className='max-w-[1240px] mx-auto w-full flex lg:items-center lg:flex-row flex-col gap-5 h-full justify-between pt-[70px]'>
                <div className='text-white'>
                    <h2 className='text-[45px] leading-[67px] font-medium'>Reseñas de tarjetas</h2>
                    <p className='text-[22px] leading-[33px] font-light'>Placeholder para un <span className='font-bold'>segundo claim</span> llamativo.</p>
                </div>
                <img src={PexelsKampus} alt='pexels-kampus' className='mb-[-90px] min-h-[210px]'/>
            </div>
        </div>
    </div>
  )
}

export default Description