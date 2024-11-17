// pages/memory-login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Transition from "@/components/ui/Transition";
import { useMemory } from "@/context/MemoryContext";

import { motion } from "framer-motion";
const validNames = [
  "John",
  "Vladimir",
  "Chijioke",
  "Nwanne",
  "Chex",
  "Chibueze",
  "Chinonso",
  "Ugochukwu",
  "Ebube",
  "Feechi",
  "Gabriel",
  "Iheanyi",
  "Justice",
  "Odinma",
  "Ogbuagu",
  "Peter",
  "Roosevelt",
  "Stephen",
  "Arthur",
  "Chinemerem",
  "Kelechi",
  "Emmanuel",
  "Odera",
];

const MemoryLogin = () => {
  const router = useRouter();
  const { setName } = useMemory();
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  // Shake animation variants
  const shakeAnimation = {
    shake: {
      x: [-20, 20, -20, 20, 0],
      transition: { duration: 0.4 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedInputName = inputName.toLowerCase();
    const validName = validNames.find(
      (validName) => validName.toLowerCase() === normalizedInputName
    );

    if (validName) {
      setName(validName); // Set the name in context
      router.push("/memory"); // Navigate without query parameters
    } else {
      setError("Who are you dawg?");
      setShakeKey(prev => prev + 1); // Change key to re-trigger animation
    }
  };
  return (
    <Transition className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col h-fit relative justify-center items-center gap-5  w-full">
        <p className="text-2xl text-center">
          Wonna View Memory? <br /> Enter your name
        </p>
        {/* Shake the form when there's an error */}
        <motion.form
         key={shakeKey}
          onSubmit={handleSubmit}
          className="bg-brown-1000 text-beige p-6 rounded shadow-md"
          animate={error ? "shake" : ""}
          variants={shakeAnimation}
        >
          <label className="block mb-2">Enter Name:</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="border p-2 mb-4 w-full bg-beige text-brown-1000 outline-none rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-beige text-brown-1000 rounded hover:bg-brown-1000 hover:text-beige border-beige border transition-all ease-in-out duration-700"
          >
            Submit
          </button>
        </motion.form>
        <div className="absolute -bottom-10">
          {" "}
          {error && <p className="text-red-500 mt-4 text-lg">{error}</p>}
        </div>
      </div>
    </Transition>
  );
};

export default MemoryLogin;
