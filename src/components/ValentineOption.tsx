import { useState } from "react";

export default function ValentineOption() {
  const [walk, setWalk] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleWalk = () => {
    setWalk(true);

    setTimeout(() => {
      setHidden(true);
    }, 5000);
  };

  return (
    <div className="flex flex-col justify-center items-center font-pangolin text-2xl text-center min-h-dvh pb-24 gap-4">
      <img src="/valentines/mofusandHeart.png" className="h-48"></img>
      <p>WILL YOU BE MY VALENTINE???</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-8 justify-items-center">
        <button className="bg-white px-4 py-2 border-4 w-20 border-red-500">
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
