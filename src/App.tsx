import { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');

  function add(numbers: string): number {
    const extractedNumbers = numbers.split(',');
    const total = extractedNumbers.reduce((acc, curr) => {
      return acc + +curr;
    }, 0);

    return total;
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-gray-700 mb-6'>
          String Calculator
        </h1>
        <label className='block text-gray-600 font-semibold mb-2'>
          Enter the string to calculate:
        </label>
        <input
          type='text'
          placeholder='Type something...'
          onChange={(e) => setNumbers(e.target.value)}
          className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all mb-4'
        />
        <div
          className={`text-lg font-semibold text-center text-purple-700 p-3 rounded-lg mt-4 transition-all duration-300 transform ${
            add(numbers)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          {add(numbers)}
        </div>
      </div>
    </div>
  );
}

export default App;
