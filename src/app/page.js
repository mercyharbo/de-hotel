'use client'

import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import HeroImage from '@/app/assets/photo2.jpeg'
import HeroImage1 from '@/app/assets/photo3.jpeg'
import HeroImage2 from '@/app/assets/photo4.jpeg'

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
      <div className='relative w-full'>
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

      <section className='grid grid-cols-1 gap-5 py-10 place-items-center mx-auto w-full special:w-[80%] large_laptop:w-[65%] laptop:w-[70%] laptop:py-20 laptop:grid-cols-2'>
        <div className='flex items-center gap-3'>
          <Image
            src={HeroImage1}
            alt='de hotel'
            width={500}
            height={500}
            className='object-cover object-center special:w-[15rem] special:h-[40rem] large_laptop:w-[20rem] large_laptop:h-[40rem] laptop:h-[40rem] laptop:w-[20rem] tablet:w-[15rem] tablet:h-[25rem] mobile:w-[10rem] mobile:h-[20rem] small_mobile:w-[10rem] small_mobile:h-[20rem] '
          />
          <Image
            src={HeroImage2}
            alt='de hotel'
            width={500}
            height={500}
            className='object-cover object-center special:w-[15rem] special:h-[35rem] large_laptop:w-[20rem] large_laptop:h-[35rem] laptop:h-[35rem] laptop:w-[20rem] tablet:w-[15rem] tablet:h-[20rem] mobile:w-[10rem] mobile:h-[17rem] small_mobile:w-[10rem] small_mobile:h-[17rem] '
          />
        </div>

        <div className='flex flex-col justify-start items-start gap-5 w-full px-5 special:w-[75%] laptop:px-0 laptop:w-[60%]'>
          <h3 className='text-3xl font-semibold'>
            Welcome to our D WHITE ROYALTY PLACE
          </h3>
          <p className='laptop:text-base tablet:text-lg mobile:text-base small_mobile:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <button className='bg-orange h-16 rounded-md text-white px-5 text-lg'>
            Book Now
          </button>
        </div>
      </section>
    </main>
  )
}
