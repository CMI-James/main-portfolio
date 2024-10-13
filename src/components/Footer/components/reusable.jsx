import React from "react";

// SocialLink component
const SocialLink = ({ href, platform, bgColor }) => {
  return (
    <a
      href={href}
      className="group flex items-center space-x-2"
      target="_blank"
      rel="noreferrer"
    >
      <div className="relative">
        <span>{platform}</span>
        <span
          className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-${bgColor} duration-300 ease-in-out group-hover:w-full`}
        ></span>
      </div>
    </a>
  );
};

// Heading component
const H4 = ({ children, level = "h4", className = "" }) => {
  const Tag = level; // Dynamically set the heading level (h1, h2, etc.)

  return (
    <Tag
      className={`text-body-1 2xl:text-4xl font-semibold text-brown-1000 ${className}`}
    >
      {children}
    </Tag>
  );
};

export { SocialLink, H4 };
