
import React from 'react'
import Layout from '../Components/layout'
import Gallery from '../Components/window/Gallery/gallery'
import { Breadcrumb } from '../Components/window/Breadcrumb/breadcrumb';





export const GalleryPage= () => {

  const breadcrumbItems = [
    {
      label: "Gallery",
      href: "/gallery",
      imageUrl: "/assets/breadcrumb/breadcrumbdestination.webp",
      alt: "gallery",
      description: "Discover Our Gallery",
    },
  ];


  return (
    <>
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
<Gallery/>
    </Layout>
    </>
  )
}
