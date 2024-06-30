import Link from 'next/link'
import React from 'react'

export default function FooterComp() {
  return (
    <footer className='bg-white py-10 px-5 flex justify-around items-start gap-10 laptop:gap-16 flex-col w-full laptop:flex-row laptop:px-20 laptop:'>
      <div className='flex flex-col justify-start items-start gap-4 w-full large_laptop:w-[25%]'>
        <h1 className='text-3xl font-semibold'>Logo here</h1>
        <p className='text-[grey]'>
          5b Michael Ogun St, Ikeja GRA, Ikeja 101233, Lagos,
          <span className='text-primary'>0915 555 0086</span>
        </p>
      </div>
      <div className='flex flex-col justify-start items-start gap-5'>
        <h4 className='text-lg font-semibold'>Links</h4>

        <div className='flex flex-col justify-start items-start gap-3'>
          <Link href='/'>Home</Link>
          <Link href='/facilities'>Facilities</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
      </div>
      <div className='flex flex-col justify-start items-start gap-4'>
        <h4 className='text-lg font-semibold'>Socials</h4>

        <div className='flex flex-col justify-start items-start gap-3'>
          <Link href='/'>Facebook</Link>
          <Link href='/facilities'>Instagram</Link>
          <Link href='/contact'>Twitter</Link>
        </div>
      </div>
    </footer>
  )
}
