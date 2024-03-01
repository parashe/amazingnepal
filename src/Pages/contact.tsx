
import React from 'react'
import Layout from '../Components/layout'
import Contact from '../Components/window/Contact/contact'
import { Breadcrumb } from '../Components/window/Breadcrumb/breadcrumb';





export const ContactPage= () => {
  const breadcrumbItems = [
    {
      label: "Contact",
      href: "/contact",
      imageUrl: "/assets/breadcrumb/breadcrumbdestination.webp",
      alt: "contactus",
      description: "Contact Us",
    },
  ];
  return (
    <>

    <Layout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-10"></div>
<Contact/>
    </Layout>
    </>
  )
}
