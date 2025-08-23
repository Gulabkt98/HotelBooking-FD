import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../Componenets/StarRating';


const RoomDetails = () => {
    const {id}=useParams();
    const[room,setRoom]=useState(null);
    const[mainImage,setMainImage]=useState(null);

    useEffect(()=>{
        const room = roomsDummyData.find(room=> room._id===id)
         room && setRoom(room) 
         room && setMainImage(room.images[0])
    },[])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
     {/* room detail */}
     <div className='flex flex-col md:flex-row items-start md:items-center gap-2' >
     <h1 className='text-3xl md:text-4xl font-playfair' >{room.hotel.name} <span className='font-inter text-sm' >({room.roomType})</span></h1>
     <p className='text-xs font-inter  py-1.5  px-3   text-white bg-orange-500 rounded-full' >20% OFF</p>
    </div>
    {/* Room Rating  */}
    <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2' >200+ reviews</p>

    </div>
    {/* Room address */}
    <div>
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
    </div>
    {/* room image */}
    <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt="Room Image"  className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
        {room?.images.length > 1 && room.images.map((image,index)=>(
            <img onClick={()=>setMainImage(image)}
            src={image} key={index} alt="Room Image"  className={` w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage=== image && 'outline-3 outline-orange-500'}`} />
        ))}
    </div>
    </div>
     {/* Room Highlights */}
     <div className='flex flex-col md:flex-row md:justify-between mt-10'>
    <div>
        <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
            {room.amenities.map((item,index)=>(
                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                    <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                    <p className='text-xs' >{item}</p>
                </div>
            ))}
        </div>
    </div>
    {/* Room Price */}
      <p className='text-2xl font-medium' >₹{room.pricePerNight}/night</p>

     </div>
     {/* checkin checkout box */}
     {/* Check-in / Check-out / Guests Box */}
<form className="flex flex-col md:flex-row items-start md:items-center justify-between 
    bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl gap-6 md:gap-10">

  {/* Left side: inputs */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 flex-wrap text-gray-500">

    {/* Check-In */}
    <div className="flex flex-col">
      <label htmlFor="checkInDate" className="font-medium">Check-In</label>
      <input 
        type="date" 
        id="checkInDate" 
        className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" 
        required 
      />
    </div>

    {/* Divider */}
    <div className="hidden md:block w-px h-12 bg-gray-300/70"></div>

    {/* Check-Out */}
    <div className="flex flex-col">
      <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
      <input 
        type="date" 
        id="checkOutDate" 
        className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" 
        required 
      />
    </div>

    {/* Divider */}
    <div className="hidden md:block w-px h-12 bg-gray-300/70"></div>

    {/* Guests */}
    <div className="flex flex-col">
      <label htmlFor="guests" className="font-medium">Guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1"
        className="w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" 
        required 
      />
    </div>
  </div>

  {/* Right side: button */}
  <button 
     type="submit" 
     className="bg-[#0A1D56] hover:bg-[#102C7A] active:scale-95 transition-all text-white 
     rounded-md w-full md:w-auto md:px-8 py-3 md:py-4 text-base cursor-pointer">
     Check Availability
   </button>

   </form>
   {/* common specification */}
   <div className='mt-25 space-y-4'>
    {roomCommonData.map((spec,index)=>(
      <div key={index} className='flex items-start gap-2' >
        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' ></img>
          <div>
            <p className='text-base'>{spec.title}</p>
            <p className='text-gray-500'>{spec.description}</p>
          </div>
         </div>  
    ))}

   </div>
   <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
    <p>
    
     Our hotel rooms offer modern facilities designed for comfort and convenience. Guests enjoy spacious, well-furnished rooms with cozy beds, air conditioning, free Wi-Fi, and smart TVs. Each room includes a private bathroom with hot water, toiletries, and fresh towels. Additional amenities include room service, mini-fridge, safety locker, and 24/7 assistance.  v
    </p>

   </div>
   {/* Hosted by */}
    <div className='flex flex-col  items-start gap-4'>
        <div className='flex gap-4'>
            <img src={room.hotel.owner.image} alt="Host"  className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
        </div>
        <div>
            <p className='flex item-center mt-1'>Hosted by {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>

            </div>
        </div>
    </div>
     <button className='bg-[#0A1D56] px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>contact Now</button>

    </div>
    
  )
}

export default RoomDetails