import React from 'react'
import Navbar from './Componenets/Navbar'
import { Route, useLocation ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './Componenets/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './Componenets/HotelReg'
import Layout from './pages/hotelOwner/Layout'

const App = () => {

  const isOwnerpath= useLocation().pathname.includes("owner");

  return (
    <div>
     { !isOwnerpath &&  <Navbar /> }
      {false && <HotelReg /> }
     <div className='min-h-[70vh]'>
      <Routes>
        < Route path='/' element={<Home/>} /> 
        < Route path='/rooms' element={<AllRooms/>} />
        < Route path='/rooms/:id' element={<RoomDetails/>} />
        < Route path='/my-bookings' element={<MyBookings/>} /> 
        <Route path='/owner' element={Layout}>


        </Route> 
      </Routes>
     </div>
     <Footer />
    </div>
  )
}

export default App