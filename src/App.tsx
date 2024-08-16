import './App.css';

function App() {
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
          className='w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all mb-4'
        />
        <button className='w-full p-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all'>
          Calculate
        </button>
      </div>
    </div>
  );
}

export default App;
