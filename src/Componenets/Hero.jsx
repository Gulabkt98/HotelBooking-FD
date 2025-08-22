import React from 'react'
import { assets, cities } from '../assets/assets'
import hotelpreview from '../assets/hotelpreview.mp4'


const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen relative'>
      
      {/* Floating gradient card on right */}
     <div className="absolute right-6 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2">
  <div className="relative bg-gradient-to-br from-black/60 via-slate-900/50 to-indigo-900/40 backdrop-blur-md rounded-xl p-6 max-w-sm shadow-xl border border-white/10 animate-fadeInUp">
    
    {/* Pins */}
    <div className="absolute -top-3 left-4 w-4 h-4 bg-gray-300 rounded-full border border-gray-500 shadow-md"></div>
    <div className="absolute -top-3 right-4 w-4 h-4 bg-gray-300 rounded-full border border-gray-500 shadow-md"></div>

    {/* Video */}
    <div className="relative rounded-lg overflow-hidden mb-4 shadow-md">
      <video autoPlay muted loop playsInline className="w-full h-48 object-cover">
        <source src={hotelpreview} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="space-y-3 text-white">
      <h3 className="text-lg font-bold">Skyline Escape</h3>
      <p className="text-sm leading-relaxed text-gray-200">
        Breathe in the freshness of open skies and modern luxury. Your perfect escape starts here.
      </p>
      <div className="flex items-center gap-2 text-xs text-gray-300">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <span>Exclusive Preview</span>
      </div>
    </div>
  </div>
</div>


      {/* Hero text */}
      <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
      <h1 className='font-playfair text-2xl md:text-5xl md:text=[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
        Discover Your Perfect Gateway Destination
      </h1>
      <p className=' max-w-130 mt-2 text-sm md:text-base'>
        Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today
      </p>
      <p className=''>gulab</p>

      {/* Form */}
      <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>
        
        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="" className='h-4' /> 
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input list='destinations' id="destinationInput" type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here" required />
          <datalist id='destinations'>
            {cities.map((city,index)=>(
              <option value={city} key={index} />
            ))}
          </datalist>
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input id="checkIn" type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>

        <div>
          <div className='flex items-center gap-2'>
            <img src={assets.calenderIcon} alt="" className='h-4' />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input id="checkOut" type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
        </div>

        <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
          <label htmlFor="guests">Guests</label>
          <input min={1} max={4} id="guests" type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
            placeholder="0" />
        </div>

        <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1'>
          <img src={assets.searchIcon} alt="searchIcon"  className='h-7' />
          <span>Search</span>
        </button>
      </form>

    </div>
  )
}

export default Hero  