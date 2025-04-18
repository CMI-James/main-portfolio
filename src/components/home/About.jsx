"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import SectionBody from "../layout/SectionBody";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const AboutMe = ({ isFullPage }) => {
  // Alternative way to detect if we're on the about page
  const pathname = usePathname();
  const isAboutPage = isFullPage || pathname === "/about";

  return (
    <Section className="theme-dark-light relative">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className="flex flex-col md:flex-row gap-8 md:gap-x-10 relative">
          <div className="flex-1 md:sticky md:top-0 h-fit max-w-full md:max-w-[45%]">
            <Image
              src="/images/about-me.jpg"
              width={800}
              height={600}
              alt="Ilonze Chibuikem Michael"
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-4 sm:gap-y-6 relative">
            <h1 className="text-xl sm:text-2xl font-bold sticky top-12  bg-beige dark:bg-brown-1000 pb-2 border-b-[1px] dark:border-b-beige/30 border-b-brown-1000/30 transition-colors duration-700 text-brown-1000 dark:text-beige z-30">
              A brief intro, who am I?
            </h1>

            <div className="relative">
              <div
                className={`flex flex-col gap-y-4 sm:gap-y-6 font-lora ${
                  isAboutPage ? "" : "max-h-[300px] overflow-hidden"
                }`}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
                  Hi, I'm{" "}
                  <span className="font-semibold">
                    Ilonze Chibuikem Michael
                  </span>
                  , a passionate{" "}
                  <span className=" font-semibold">Frontend Developer</span>{" "}
                  with{" "}
                  <span className="font-semibold">years of experience</span>. I
                  specialize in building interactive, high-performance web
                  applications using modern technologies like{" "}
                  <span className="font-semibold">
                    React.js, Next.js, Framer Motion, Tailwind CSS, and
                    TypeScript
                  </span>
                  .
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
                  I hold a{" "}
                  <span className="font-semibold">
                    B.Eng in Electronic and Computer Engineering
                  </span>{" "}
                  from UNN, where I gained in-depth knowledge of embedded
                  systems, digital signal processing, circuit design, and
                  software-hardware integration. My studies equipped me with a
                  strong analytical mindset, problem-solving skills, and the
                  ability to design and optimize complex electronic and
                  computational systems.
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
                  Currently, I'm expanding my expertise by learning{" "}
                  <span className="font-semibold">Python for AI</span>. Beyond
                  coding, I enjoy{" "}
                  <span className="font-semibold">
                    playing football and spending time with friends
                  </span>
                  . Balancing work and personal life comes naturally to me
                  because I genuinely enjoy what I do.
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose font-semibold text-blue-600">
                  Let's build something amazing together! 🚀
                </p>
              </div>

              {!isAboutPage && (
                <>
                  <div className="absolute bottom-0 left-0 -z-30 right-0 h-24 bg-gradient-to-t from-beige dark:from-brown-1000 to-transparent"></div>

                  <Link href="/about" passHref>
                    <Button
                      variant="outline"
                      className="mt-4 flex items-center gap-2 mx-auto relative z-10 theme-light-dark-button "
                    >
                      Read more <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default AboutMe;
