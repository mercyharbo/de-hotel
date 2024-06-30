import Image from 'next/image'
import { IoStar } from 'react-icons/io5'

const Card = ({ name, imageUrl, rating, price }) => {
  return (
    <div className='flex flex-col gap-3 w-full rounded-lg shadow-md '>
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={300}
        className='object-cover object-center w-full rounded-t-lg'
      />
      <div className='p-4 flex flex-col justify-start items-start gap-2'>
        <h3 className='text-base font-semibold'>{name}</h3>
        <div className='flex items-center gap-3'>
          <IoStar className='text-orange' />
          <span className='text-[grey]'>{rating}</span>
        </div>
        <span className=''>{price}</span>
      </div>
    </div>
  )
}

export default Card
