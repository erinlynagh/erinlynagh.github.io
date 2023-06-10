"use client";
import { useEffect, useState } from "react";
import MainPage from "./MainPage";
import Winner from "./winner";
import React from "react";

export default function Home() {
  const [hasWon, setHasWon] = useState<boolean>(false);

  useEffect(() => {
    console.log("passcode is 2134");
  }, []);

  const winner = () => {
    setHasWon(true);
  };

  const lose = () => {
    setHasWon(false);
  };

  return (
    <div className="flex flex-col">
      {hasWon ? <Winner lose={lose} /> : <MainPage win={winner} />}
    </div>
  );
}
