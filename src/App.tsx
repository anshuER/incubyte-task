import { useState } from 'react';
import './App.css';

function App() {
  let [numbers, setNumbers] = useState('');
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');

  function add() {
    try {
      if (numbers === '') return 0;
      let delimiter = ',';

      if (numbers.startsWith('//')) {
        const delimiterEndIndex = numbers.indexOf('\\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 2);
      }

      const sanitizedNumbers = numbers.replace(/\\n/g, delimiter);
      const extractedNumbers = sanitizedNumbers.split(',');

      const negatives = extractedNumbers.filter((n) => +n < 0);
      if (negatives.length > 0) {
        setError(`negative numbers not allowed ${negatives.join(',')}`);
      }

      const total = extractedNumbers.reduce((acc, curr) => {
        return acc + (parseFloat(curr) || 0);
      }, 0);

      setTotal(total);
    } catch (error) {
      console.log('error', error);
    }
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
        <button
          onClick={add}
          className='w-full p-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all'
        >
          Calculate
        </button>
        <div
          className={`text-lg font-semibold text-center text-purple-700 p-3 rounded-lg mt-4 transition-all duration-300 transform ${
            total > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Total: {total}
        </div>
        {error && total <= 0 && (
          <p className='text-center text-red-500'>{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
