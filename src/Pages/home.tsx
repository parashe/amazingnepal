
import React from 'react'
import Layout from '../Components/layout'
import { Carousel } from '../Components/window/Carousel'
import {Services} from '../Components/window/Service/service'
import Whywe from '../Components/window/Whywe/whywe'
import Destination from '../Components/window/Destination/destination'
import Rating from '../Components/window/Rating/rating'
import Recommended from '../Components/window/Recommended/recommended'


export const HomePage = () => {
  return (
    <>
    <Layout>
      <Carousel/>

{/*      
      <Services/> */}
      <Destination/>
      <Recommended/>
      <Whywe/>
      <Rating/>
    </Layout>
    </>
  )
}
