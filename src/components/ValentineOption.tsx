import { useState } from "react";

export default function ValentineOption() {
  const [walk, setWalk] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [responsed, setResponsed] = useState(false);

  interface Heart {
    id: number;
    location: string;
  }

  // Keep track of all hearts
  const [hearts, setHearts] = useState<Heart[]>([]);

  const handleWalk = () => {
    setWalk(true);

    setTimeout(() => {
      setHidden(true);
    }, 3900);
  };

  // For giving hearts ID
  let heartIter = 0;

  // Function to generate a heart
  const createHeart = () => {
    // Heart object with id and random width
    const heart: Heart = {
      id: heartIter, // Unique ID
      location: Math.random() * 100 + "vw",
    };

    // Put hearts into the array
    setHearts((prevHearts) => [...prevHearts, heart]);
    // Increment ID
    heartIter += 1;

    // After certain amount of time, remove heart from the array
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((h) => h.id !== heart.id));
    }, 6000);
  };

  if (!responsed) {
    return (
      <div className="flex flex-col justify-center items-center font-pangolin text-2xl text-center min-h-dvh pb-24 gap-4">
        <img src="/valentines/mofusandHeart.png" className="h-48"></img>
        <p>WILL YOU BE MY VALENTINE???</p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-8 justify-items-center">
          <button
            className="bg-white px-4 py-2 border-4 w-20 border-red-500"
            onClick={() => {
              setResponsed(true);
              setInterval(createHeart, 100);
            }}
          >
            <p>YES</p>
          </button>

          <button
            hidden={hidden}
            className={`bg-white px-4 py-2 border-4 w-20 border-red-500 ${
              walk && "animate-walk"
            }`}
            onClick={handleWalk}
          >
            <p>NO</p>
          </button>
          <img
            hidden={!walk || hidden}
            src="/valentines/walking.gif"
            className="col-start-2 w-12 animate-walk"
          ></img>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center font-pangolin text-2xl text-center min-h-dvh pb-48">
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src="https://pngimg.com/uploads/heart/heart_PNG51335.png"
          className="absolute w-6 -top-10 animate-fall -z-1"
          style={{
            left: heart.location,
          }}
          alt="heart"
        />
      ))}
      <img src="/valentines/link.png" className="w-78"></img>
      <p className="break-words w-[20ch]">
        You and me? February 14th? Irvine Spectrum Center?
      </p>
    </div>
  );
}
