import React from 'react'
import Hero from '../Componenets/Hero'
import FeaturedDesination from '../Componenets/FeaturedDesination'
import ExclusiveOffers from '../Componenets/ExclusiveOffers'
import Testimonial from '../Componenets/Testimonial'
import NewsLetter from '../Componenets/NewsLetter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDesination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
    </>
  )
}

export default Home