import Footer from "@/components/Footer";
import MyServices from "@/components/Services";
import Transition from "@/components/ui/Transition";
import React from "react";

const Services = () => {
  return (
    <Transition>
      <MyServices />
      <Footer />
    </Transition>
  );
};

export default Services;
