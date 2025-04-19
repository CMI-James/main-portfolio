"use client";
import React, { useEffect, useState } from "react";
import { H4, SocialLink } from "./ui/reusable";

const ContactDetails = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formattedTime);
    };

    updateTime(); // Update immediately on mount
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const socialLinks = [
    { href: "https://github.com/CMI-James", platform: "Github" },
    {
      href: "https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/",
      platform: "LinkedIn",
    },
    { href: "https://medium.com/CMI_James", platform: "Medium" },
    { href: "https://x.com/cmi_james", platform: "X (Twitter)" },
    { href: "https://instagram.com/cmi_james", platform: "Instagram" },
    { href: "https://web.facebook.com/CMIJames", platform: "Facebook" },
  ];

  return (
    <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-brown-700 dark:text-beige/70 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
      {/* Contact Details */}
      <div className="space-y-3">
        <H4>Contact Details</H4>
        <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl ">
          <SocialLink
            href="mailto:chibuikemichaelilonze@gmail.com"
            platform="chibuikemichaelilonze@gmail.com"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <H4>Others</H4>
        <div className="space-y-3 text-body-2 2xl:text-3xl  w-full md:flex flex-col grid grid-cols-2 grid-rows-2 justify-between items-end md:items-start ">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} platform={link.platform} />
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <H4>Location</H4>
        <div className="space-y-2 text-body-2 2xl:text-3xl font-lora">
          <p>
            Enugu State, Nigeria. <br />
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
