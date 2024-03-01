
import React from 'react'
import Layout from '../Components/layout'

import {ServiceDetails, Services} from '../Components/window/Service/service'
import { Breadcrumb } from '../Components/window/Breadcrumb/breadcrumb';



export const ServiceDetailsPage= () => {

  const breadcrumbItems = [
    {
      label: "Services Details",
      href: "/services",
      imageUrl: "/assets/breadcrumb/service.jpeg",
      alt: "Breadcrumb Destination",
      description: "Discover Our Service Details",
    },
  ];
  return (
    <>
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
    <ServiceDetails/>
    <Services/>
    </Layout>
    </>
  )
}
