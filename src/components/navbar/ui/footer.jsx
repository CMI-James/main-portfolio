import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/CMI-James",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/cmi_james",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
];

export default function NavFooter() {
  return (
    <div className="flex w-full justify-center gap-x-10 text-2xl ">
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          className="group flex items-center space-x-2 border-2 p-2 rounded-full"
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
