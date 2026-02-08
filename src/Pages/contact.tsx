import React from "react";
import Layout from "../Components/layout";
import Contact from "../Components/window/Contact/contact";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const ContactPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="pt-4 md:pt-6">
        <Contact />
      </div>
    </Layout>
  );
};
