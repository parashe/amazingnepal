
import React from 'react'
import Layout from '../Components/layout'
import Nepal from '../Components/window/Nepal/nepal'
import { Breadcrumb } from '../Components/window/Breadcrumb/breadcrumb';





export const NepalPage= () => {

  const breadcrumbItems = [
    {
      label: "Nepal",
      href: "/nepal",
      imageUrl: "/assets/breadcrumb/nepal.jpeg",
      alt: "nepal",
      description: "Our Pride of Nepal",
    },
  ];


  return (
    <>
    <Layout>
<Breadcrumb items={breadcrumbItems} />
<div className="container mx-auto px-4 py-10"></div>

    <Nepal/>
    </Layout>
    </>
  )
}
