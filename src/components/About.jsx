import React from "react";
import Section from "./ui/Section";
import SectionHeader from "./ui/section-header";
import SectionBody from "./ui/section-body";
import Image from "next/image";
import { AboutDp } from "public/images";
const AboutMe = () => {
  return (
    <Section className="theme-dark-light relative">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className="min-h-screen mt-20 flex flex-col md:flex-row gap-x-10 relative ">
          <div className="flex-1 md:sticky top-0 h-fit ">
            <Image src={AboutDp} width={0} height={0} className="w-full " />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">A brief intro, who am I ?</h1>
            <p className="text-2xl leading-10">
              I am Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt odit voluptates perspiciatis saepe, esse rerum
              perferendis harum autem odio eaque adipisci numquam labore
              veritatis fugiat laborum vel rem, iusto in id reprehenderit
              aliquid expedita amet nisi repellendus? Nam deserunt, perspiciatis
              non atque et amet eos rerum alias, quisquam vero repellat? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tenetur quo dolor eius accusamus doloremque nam maiores mollitia
              ratione quos culpa nemo fuga molestiae ullam impedit, perspiciatis
              eos aut perferendis ut ipsa. Commodi repellendus quaerat iste,
              voluptatum animi amet magnam asperiores distinctio sint temporibus
              facilis ducimus minus quam numquam odio porro veritatis incidunt
              sed eius tenetur. Cumque, harum quam repellendus autem animi error
              obcaecati possimus in quaerat provident sint dolores odit
              temporibus, molestiae ut quidem pariatur laboriosam perferendis.
              Repellendus temporibus voluptas facere dolore obcaecati saepe eos
              facilis similique repudiandae animi sed quaerat, nisi magni, error
              magnam explicabo tempora cupiditate officiis aliquam autem.
              Impedit doloremque quas, dolor laudantium autem eius soluta fuga,
              obcaecati, optio possimus et ad quo excepturi quidem qui maxime
              iste? Ab nihil voluptatum est, corporis neque incidunt eius
              blanditiis cumque maxime atque ex, iusto beatae repellat magnam
              libero ipsum impedit. Voluptatibus, maiores! Incidunt ut accusamus
              nemo molestiae exercitationem. Veniam illum sapiente eius
              reiciendis minus. Fugit maiores tenetur porro commodi distinctio
              ipsum magnam explicabo aliquam labore,
            </p>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default AboutMe;
