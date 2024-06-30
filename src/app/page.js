'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import HeroImage from '@/app/assets/photo2.jpeg'

gsap.registerPlugin(useGSAP)

export default function Home() {
  const container = useRef()

  useGSAP(
    () => {
      gsap.fromTo(
        '.welcome',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.inOut', duration: 0.5 }
      )

      gsap.fromTo(
        '.heading',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
      )

      gsap.fromTo(
        '.paragraph',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.inOut', duration: 1.5 }
      )

      gsap.fromTo(
        '.btn',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.inOut', duration: 2 }
      )
    },
    { scope: container }
  )

  return (
    <main ref={container} className=''>
      <div className='relative'>
        <Image
          src={HeroImage}
          alt='de hotel'
          width={1000}
          height={1000}
          quality={100}
          className='w-full h-[45rem] object-cover object-center'
        />

        <div className=' w-full h-full absolute top-0 left-0 bg-[#00000079]'>
          <div className='w-full flex flex-col justify-center items-start gap-3 text-white h-full px-5 laptop:px-14 large_laptop:px-20 laptop:w-[40%]'>
            <span className='welcome uppercase font-normal text-2xl laptop:text-4xl'>
              welcome to
            </span>
            <h1 className='heading uppercase font-bold text-6xl laptop:text-8xl'>
              D WHITE ROYALTY PLACE
            </h1>
            <p className='paragraph text-xl laptop:text-2xl'>
              Book your stay and enjoy luxury redefined at the most affordable
              rates
            </p>
            <button className='btn bg-orange h-16 rounded-md text-white px-5 text-lg'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
