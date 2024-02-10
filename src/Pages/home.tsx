
import React from 'react'
import Layout from '../Components/layout'
import { Carousel } from '../Components/window/Carousel'
import {Services} from '../Components/window/Service/service'
import Whywe from '../Components/window/Whywe/whywe'
import Destination from '../Components/window/Destination/destination'
import Rating from '../Components/window/Rating/rating'


export const HomePage = () => {
  return (
    <>
    <Layout>
      <Carousel/>

     
      <Services/>
      <Destination/>
      <Whywe/>
      <Rating/>
    </Layout>
    </>
  )
}
