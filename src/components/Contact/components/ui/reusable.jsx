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
          className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-1000 duration-300 ease-in-out group-hover:w-full`}
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
      className={`text-body-1 2xl:text-4xl font-semibold text-brown-1000 dark:text-beige ${className}`}
    >
      {children}
    </Tag>
  );
};


// Reusable Input Component
const InputField = ({ type = "text", id, name, label }) => {
  return (
    <div className="relative z-0">
      <input
        required
        type={type}
        id={id}
        name={name}
        className="peer block w-full appearance-none border-0 border-b border-brown-1000 dark:border-beige bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-brown-500 dark:text-beige/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
};

// Reusable TextArea Component
const TextAreaField = ({ id, name, rows = 5, label }) => {
  return (
    <div className="relative z-0">
      <textarea
        required
        id={id}
        name={name}
        rows={rows}
        className="peer block w-full appearance-none border-0 border-b border-brown-1000 dark:border-beige bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
        placeholder=" "
      ></textarea>
      <label
        htmlFor={id}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-brown-500 dark:text-beige/50 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
};

export { SocialLink, H4, InputField, TextAreaField };
