import React from "react";
import { H4, SocialLink } from "./ui/reusable";


const ContactDetails = ({ time }) => {
  const socialLinks = [
    { href: 'https://github.com/ChibuikemMichaelIlonze', platform: 'Github' },
    { href: 'https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/', platform: 'LinkedIn' },
    { href: 'https://web.facebook.com/chibuike.ilonze.1', platform: 'Facebook' },
    { href: 'https://twitter.com/BikeManJames', platform: 'X (Twitter)' }
  ];

  return (
    <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-brown-700 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
      {/* Contact Details */}
      <div className="space-y-3">
        <H4>Contact Details</H4>
        <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
          <SocialLink
            href="mailto:chibuikemichaelilonze@gmail.com"
            platform="chibuikemichaelilonze@gmail.com"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <H4>Others</H4>
        <div className="space-y-3 text-body-2 2xl:text-3xl">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} platform={link.platform} />
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <H4>Location</H4>
        <div className="space-y-2 text-body-2 2xl:text-3xl">
          <p>
            Enugu, Nigeria <br />
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
