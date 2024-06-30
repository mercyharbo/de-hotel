'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'

gsap.registerPlugin(useGSAP)

const NavLinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 1, title: 'Facilities', link: '/facilities' },
  { id: 1, title: 'Contact Us', link: '/contact' },
]

export default function Navbar() {
  const navLinksRef = useRef([])
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)

  useGSAP(
    () => {
      if (showModal) {
        gsap.from(navLinksRef.current, {
          opacity: 0,
          y: -20,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      gsap.fromTo(
        '.btn',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.inOut', duration: 2 }
      )
    },
    { scope: navLinksRef }
  )

  return (
    <nav
      ref={navLinksRef}
      className='relative bg-orange px-5 py-5 w-full flex justify-between items-center laptop:px-14 large_laptop:px-20'
    >
      <h1 className='text-3xl text-white'>Logo here</h1>

      <div className='items-center gap-5 hidden laptop:flex'>
        {NavLinks.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.id}
              className={`text-white ${pathname === item.link ? '' : ''}`}
            >
              {item.title}
            </Link>
          )
        })}

        <Link
          href='#booking'
          className='border border-white rounded-lg p-2 text-white'
        >
          Book Now
        </Link>
      </div>

      <button
        type='button'
        onClick={() => setShowModal(!showModal)}
        className='block text-white text-4xl laptop:hidden'
      >
        <HiOutlineBars3CenterLeft />
      </button>

      {showModal && (
        <div className='navbarCont flex flex-col justify-start items-start gap-5 w-[95%] p-5 rounded-md bg-orange absolute top-20 left-3 z-10 h-auto laptop:hidden'>
          <div className='flex flex-col justify-start items-start w-full'>
            {NavLinks.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  className={`text-white w-full h-12 rounded-md flex justify-start items-center px-2 hover:text-black hover:bg-white ${
                    pathname === item.link ? '' : ''
                  }`}
                >
                  {item.title}
                </Link>
              )
            })}
          </div>

          <Link
            href='#booking'
            className='border border-white rounded-lg w-full flex justify-center items-center h-14 text-white'
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
