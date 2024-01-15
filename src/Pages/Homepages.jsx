import React from 'react'
import Herosec from '../components/Herosec'
import Product from '../components/Product'
import SopingStore from '../components/SopingStore'
import Footer from '../components/Footer'
import FestivalOffer from '../components/FestivalOffer'
import WoodenSofa from '../components/WoodenSofa'
import SingleSofa from '../components/SingleSofa'
import LatestDeal from '../components/LatestDeal'
import Testimonial from '../components/Testimonial'
import BackToTop from '../components/BackToTop'
import Loder from '../components/Loder'

const Homepages = () => {
  return (
    <div>
     <Loder/>   
    <Herosec/>
    <Product/>
    <SingleSofa/>
    <SopingStore/>
    <WoodenSofa/>
    <LatestDeal/>
    <FestivalOffer/>
    <Testimonial/>
    <Footer/>
    <BackToTop/>

    </div>
  )
}

export default Homepages