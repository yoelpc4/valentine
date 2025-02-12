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
          <img
            src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazF2eWRqdTkwMWIwcjc0NXl3MW4zNG13a2EyNjB1YXR2bGtydjE1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif'
            alt='love'
            width="300"
          />
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
              className="cursor-pointer border border-pink-200 rounded-full p-3 bg-red-500 text-white"
              onClick={() => setIsAccepted(true)}
            >
              Yes, I will
            </button>
            <button
              className="cursor-pointer border border-pink-200 rounded-full p-3 bg-stone-950 text-white transition-transform duration-10"
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
