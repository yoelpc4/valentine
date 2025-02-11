import { useState } from 'react'

function App() {
  const [isAccepted, setIsAccepted] = useState(false);

  const [transformStyle, setTransformStyle] = useState({});

  const getRandomNumber = () => Math.floor(Math.random() * 201) - 100; // random between -100 until 100

  const randomizePosition = () => {
    const x = getRandomNumber();

    const y = getRandomNumber();

    setTransformStyle({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 p-10 h-screen bg-pink-200">
      {isAccepted ? (
        <>
          <svg
            className="size-64 fill-pink-500 animate-bounce"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81
                14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55
                11.54L12 21.35z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-pink-500">
            Yaay <span className="animate-pulse">😘</span>
          </h1>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-pink-500">
            Will you be my valentine?
          </h1>
          <div className="flex justify-evenly items-center w-full">
            <button
              className="border border-pink-200 rounded-full p-3 bg-red-500 text-white"
              onClick={() => setIsAccepted(true)}
            >
              Yes, I will
            </button>
            <button
              className="border border-pink-200 rounded-full p-3 bg-stone-950 text-white transition-transform duration-10"
              style={transformStyle}
              onMouseEnter={randomizePosition}
              onMouseLeave={randomizePosition}
              onClick={randomizePosition}
            >
              No, Why?
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
