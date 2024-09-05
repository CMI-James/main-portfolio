import { useEffect, useState, useRef } from "react";
import Heading from "../Heading";

export default function Footer1() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup the interval on component unmount okay
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="py-[10%] px-5 md:px-10 xl:px-20 2xl:px-28"
      aria-label="contact me"
    >
      <Heading title="Contact" />
      <div className="pt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight text-brown-1000">
            Got a great idea? <br /> Let's make it happen!
          </h3>
          <p className="pt-4 max-w-md 2xl:max-w-2xl text-body-2 2xl:text-4xl text-brown-700 ">
            I am currently available for freelance frontend development work and
            open to new projects.
          </p>
          <form
            name="contact"
            action="/contact"
            autoComplete="off"
            className="pt-10 "
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-brown-1000 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-brown-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-brown-1000 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-brown-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-brown-1000 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-brown-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group pt-10  duration-200 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute bottom-2 h-1 w-0 bg-brown-1000 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                <span className="group-hover:text-beige bg-brown-1000 text-beige rounded-xl p-2">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-brown-700 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold text-brown-1000">
              Contact Details
            </h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:chibuikemichaelilonze@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>chibuikemichaelilonze@gmail.com</span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-brown-500  duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold text-brown-1000">
              Others
            </h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://github.com/ChibuikemMichaelIlonze"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-brown-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://web.facebook.com/chibuike.ilonze.1"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <span>Facebook</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>{" "}
              <a
                href="https://twitter.com/BikeManJames"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <span>X (Twitter)</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-brown-500 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl text-brown-1000">
              Location
            </h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Enugu, Nigeria <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
