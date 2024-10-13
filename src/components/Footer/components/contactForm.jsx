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
          <span className="hover:text-brown-1000 hover:bg-beige border border-brown-1000 transition-colors duration-500 bg-brown-1000 text-beige rounded-xl p-2">
            Send Message
          </span>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
