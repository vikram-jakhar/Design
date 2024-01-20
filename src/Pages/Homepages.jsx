import React from 'react'

import Product from '../components/Product'
import SopingStore from '../components/SopingStore'

import FestivalOffer from '../components/FestivalOffer'
import WoodenSofa from '../components/WoodenSofa'
import SingleSofa from '../components/SingleSofa'
import LatestDeal from '../components/LatestDeal'
import Testimonial from '../components/Testimonial'
const Homepages = () => {
  return (
    <div>
    <Product/>
    <SingleSofa/>
    <SopingStore/>
    <WoodenSofa/>
    <LatestDeal/>
    <FestivalOffer/>
    <Testimonial/>
    </div>
  )
}

export default Homepages