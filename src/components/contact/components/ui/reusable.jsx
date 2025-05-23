"use client"

// SocialLink component
const SocialLink = ({ href, platform, bgColor }) => {
  return (
    <a href={href} className="group flex items-center space-x-2" target="_blank" rel="noreferrer">
      <div className="relative max-w-full font-lora">
        <span className="block overflow-hidden whitespace-nowrap text-ellipsis">{platform}</span>
        <span
          className={`absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-1000 dark:bg-beige duration-300 ease-in-out group-hover:w-full`}
        ></span>
      </div>
    </a>
  )
}

// Heading component
const H4 = ({ children, level = "h4", className = "" }) => {
  const Tag = level // Dynamically set the heading level (h1, h2, etc.)

  return (
    <Tag className={`text-body-1 2xl:text-4xl font-semibold text-brown-1000 dark:text-beige ${className}`}>
      {children}
    </Tag>
  )
}

// Reusable Input Component
const InputField = ({ type = "text", id, name, label, value, onChange, error, disabled }) => {
  return (
    <div className="relative z-0 font-lora">
      <input
        required
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`peer block w-full appearance-none border-0 border-b ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-brown-1000 dark:border-beige focus:border-brown-1000 dark:focus:border-beige"
        } bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 ${
          error ? "text-red-500" : "text-brown-500 dark:text-beige/50"
        } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
    </div>
  )
}

// Reusable TextArea Component
const TextAreaField = ({ id, name, rows = 5, label, value, onChange, error, disabled }) => {
  return (
    <div className="relative z-0 font-lora">
      <textarea
        required
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`peer block w-full appearance-none border-0 border-b ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-brown-1000 dark:border-beige focus:border-brown-1000 dark:focus:border-beige"
        } bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 resize-none`}
        placeholder=" "
      ></textarea>
      <label
        htmlFor={id}
        className={`absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 ${
          error ? "text-red-500" : "text-brown-500 dark:text-beige/50"
        } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-sm text-red-500 font-medium">{error}</p>}
    </div>
  )
}

export { SocialLink, H4, InputField, TextAreaField }
