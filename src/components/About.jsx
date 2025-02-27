import React from "react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import SectionBody from "./ui/SectionBody";
import Image from "next/image";
import { AboutMe } from "public/images";
const About = () => {
  return (
    <Section className="theme-dark-light relative">
      <SectionHeader title="About Me" />
      <SectionBody>
        <div className="min-h-screen mt-20 flex flex-col md:flex-row gap-x-10 relative ">
          <div className="flex-1 sticky top-0 h-fit ">
            <Image
              src={AboutMe}
              width={0}
              height={0}
              className="w-full "
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl">A brief intro, who am I ?</h1>
            <p className="text-2xl">
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
              ipsum magnam explicabo aliquam labore, sunt quas esse sed nesciunt
              aliquid soluta voluptate ducimus obcaecati voluptatibus beatae ab
              est odit! Voluptatem, dolor! Iusto adipisci exercitationem dolorum
              vero, voluptas nisi corporis harum itaque. At, ipsam accusantium?
              Ut, ipsum sit! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolor eius magnam similique harum voluptate doloribus magni
              laboriosam hic animi nostrum quod consequuntur molestiae neque qui
              sit explicabo nisi illo molestias nesciunt dignissimos reiciendis
              ea temporibus, repudiandae perferendis. Praesentium quae enim
              fugit labore porro ullam obcaecati laborum itaque veniam nostrum
              rerum soluta accusantium vero iste at officiis impedit error,
              dignissimos beatae sint quos cupiditate maiores a assumenda?
              Incidunt iure quaerat doloribus, sed facilis corporis? Commodi
              officiis quos eveniet mollitia? Quam eaque adipisci ea maiores
              placeat ipsum, fugiat voluptatem consequatur facilis velit porro.
              Corrupti repellendus illo, veniam voluptate et dignissimos hic
              aspernatur! Quas ad ullam sint tenetur esse fuga pariatur! Impedit
              sequi nobis aperiam delectus deleniti modi tempore quaerat quo
              magnam ipsum illo fugit, corrupti repudiandae, dignissimos
              reiciendis neque aspernatur est. Amet voluptatem iusto quae
              expedita consequatur at suscipit similique est odio, delectus
              quidem corrupti doloribus corporis debitis eos modi ullam nisi rem
              neque explicabo velit quia illum! Dicta, ut quidem sequi
              dignissimos corrupti quisquam esse fugit ex enim fuga voluptatem
              laboriosam quos cupiditate quibusdam voluptatum maiores
              consequatur possimus ipsam cum dolorum magni odio? Quia, sunt
              necessitatibus! Tempora libero ducimus error doloremque minus
              totam? Eaque, inventore corporis voluptatem magni ab incidunt
              recusandae.
            </p>
          </div>
        </div>
      </SectionBody>
    </Section>
  );
};

export default About;
