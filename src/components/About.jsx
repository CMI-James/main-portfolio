import Section from "./layout/section";
import SectionHeader from "./layout/section-header";
import SectionBody from "./layout/section-body";
import Image from "next/image";
import { AboutDp } from "public/images";

const AboutMe = () => {
  return (
    <Section className="theme-dark-light relative">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className=" mt-8 sm:mt-12 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-x-10 relative text-beige/80">
          <div className="flex-1 md:sticky md:top-0 h-fit max-w-full md:max-w-[45%]">
            <Image
              src={AboutDp || "/placeholder.svg"}
              width={0}
              height={0}
              alt="Ilonze Chibuikem Michael"
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-1 flex flex-col gap-y-4 sm:gap-y-6 relative">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold sticky top-12 bg-beige dark:bg-brown-1000 pb-2 border-b-[1px]  dark:border-b-beige/30 border-b-brown-1000/30 transition-colors duration-700 text-beige">
            <span>  A brief intro, who am I?</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
              Hi, I'm{" "}
              <span className="font-semibold">Ilonze Chibuikem Michael</span>, a
              passionate{" "}
              <span className="text-blue-600 font-semibold">
                Frontend Developer
              </span>{" "}
              with <span className="font-semibold">years of experience</span>. I
              specialize in building interactive, high-performance web
              applications using modern technologies like{" "}
              <span className="font-semibold">
                React.js, Next.js, Framer Motion, Tailwind CSS, and TypeScript
              </span>
              .
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
              I hold a{" "}
              <span className="font-semibold">
                B.Eng in Electronic and Computer Engineering
              </span>{" "}
              from UNN, where I gained in-depth knowledge of embedded systems,
              digital signal processing, circuit design, and software-hardware
              integration. My studies equipped me with a strong analytical
              mindset, problem-solving skills, and the ability to design and
              optimize complex electronic and computational systems.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose">
              Currently, I'm expanding my expertise by learning{" "}
              <span className="font-semibold">Python for AI</span>. Beyond
              coding, I enjoy{" "}
              <span className="font-semibold">
                playing football and spending time with friends
              </span>
              . Balancing work and personal life comes naturally to me because I
              genuinely enjoy what I do.
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose font-semibold text-blue-600">
              Let's build something amazing together! 🚀
            </p>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default AboutMe;
