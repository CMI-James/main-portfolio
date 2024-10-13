// pages/memory-login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Transition from '@/components/ui/Transition';


const validNames = [
  'John', 'Vladimir', 'Chijioke', 'Nwanne', 'Chex', 'Chibueze', 'Chinonso',
  'Ugochukwu', 'Ebube', 'Feechi', 'Gabriel', 'Iheanyi', 'Justice', 'Odinma',
  'Ogbuagu', 'Peter', 'Roosevelt', 'Stephen', 'Arthur', 'Chinemerem', 'Kelechi',
  'Emmanuel', 'Odera',
];

const MemoryLogin = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedInputName = name.toLowerCase();
    const validName = validNames.find(
      (validName) => validName.toLowerCase() === normalizedInputName
    );

    if (validName) {
      router.push(`/memory?name=${encodeURIComponent(validName)}`);
    } else {
      setError('I guess you are not that important to be in my memory');
    }
  };

  return (
    <Transition>
      <div className="flex flex-col justify-center items-center gap-5 h-screen w-full">
        <p className="text-2xl text-center">
          View Memory? <br /> Enter your name
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-brown-1000 text-beige p-6 rounded shadow-md"
        >
          <label className="block mb-2">Enter Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4 w-full bg-beige text-brown-1000"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-beige text-brown-1000 rounded"
          >
            Submit
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </Transition>
  );
};

export default MemoryLogin;
