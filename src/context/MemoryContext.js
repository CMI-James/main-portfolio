// contexts/MemoryContext.js
import React, { createContext, useState, useContext } from "react";

const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <MemoryContext.Provider value={{ name, setName }}>
      {children}
    </MemoryContext.Provider>
  );
};

export const useMemory = () => useContext(MemoryContext);
