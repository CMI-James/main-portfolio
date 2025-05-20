import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function NavFooter() {
  return (
    <div className="flex w-full justify-around text-2xl">
      <a
        href="https://github.com/CMI-James"
        className="group flex items-center space-x-2"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/"
        className="group group flex w-fit items-center space-x-2"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/cmi_james"
        className="group flex items-center space-x-2"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter />
      </a>
    </div>
  );
}
