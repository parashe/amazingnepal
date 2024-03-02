
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
