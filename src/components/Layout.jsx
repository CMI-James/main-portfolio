import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import useScrollSection from "@/hooks/useScrollSection";
import { getSectionClasses } from "@/utils/sectionUtils";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const section = useScrollSection();
  const { mainColor } = getSectionClasses(section);
  console.log("mainColor", mainColor);

  return (
    <AnimatePresence mode="wait">
      <div key={router.pathname} className={`${mainColor}`}>
        <Navbar />
        {children}
      </div>
    </AnimatePresence>
  );
}
