import React from 'react';
import { InputField, TextAreaField } from './ui/reusable';

const ContactForm = () => {
  return (
    <form
      name="contact"
      action="/contact"
      autoComplete="off"
      className="pt-10"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        <InputField id="name" name="name" label="Your name" />
        <InputField type="email" id="email" name="email" label="Your email" />
        <TextAreaField id="message" name="message" label="Your message" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="button group pt-10 duration-200 hover:bg-transparent"
      >
        <span className="relative">
          <span className="hover:text-brown-1000 dark:hover:text-beige hover:bg-beige dark:hover:bg-brown-1000 border border-brown-1000 dark:border-beige transition-colors duration-500 bg-brown-1000 dark:bg-beige text-beige dark:text-brown-1000 rounded-xl p-2">
            Send Message
          </span>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
