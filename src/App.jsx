import { useState } from 'react';

function App() {
  const [datas, setDatas] = useState();

  const handleClick = () => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <p className='text-7xl bg-red-500'>simple checking app text</p>
      <button
        onClick={() => handleClick()}
        className='bg-blue-700 text-white rounded-lg py-1 px-5'
      >
        Click me
      </button>

      <p className='text-2xl text-green-950'>{datas?.message}</p>
    </>
  );
}

export default App;
