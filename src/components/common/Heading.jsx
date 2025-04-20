import { FiTriangle } from "react-icons/fi";

export default function Heading({ title }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 text-2xl md:text-3xl lg:text-4xl text-secondary-600">
        <FiTriangle />
        <h1 className="w-fit text-5xl sm:text-heading-1 font-medium uppercase ">
          {title}
        </h1>
        <FiTriangle />
      </div>
    </>
  );
}
