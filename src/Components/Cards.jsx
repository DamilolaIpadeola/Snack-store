import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl'
      src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="/"/>
    </div>

     {/* card */}
     <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl'
      src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="/"/>
    </div>

     {/* card */}
     <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We delivered deserts</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className='max-h-[160px] md:max-h-[200px] w-full obeject-cover rounded-xl'
      src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="/"/>
    </div>

    </div>
  )
}

export default Cards
