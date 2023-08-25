"use client";

import { audioDataType, keys, audioData } from "@/src/data/audioData";
import React, { ChangeEvent, useEffect, useState } from "react";

function Drum() {
  const [display, setDisplay] = useState<string | number>("");
  const [power, setPower] = useState<boolean>(true);
  const [mode, setMode] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(20);

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    setDisplay(`Volume: ${e.target.value}`);
  };
  const handlePower = (e: ChangeEvent<HTMLInputElement>) => {
    setPower((prev) => !prev);
    setDisplay(`Power: ${!power ? "On" : "Off"}`);
  };
  const handleMode = (e: ChangeEvent<HTMLInputElement>) => {
    setMode((prev) => !prev);
    setDisplay(`Bank Mode: ${!mode ? "On" : "Off"}`);
  };

  const playAudio = (audioDetails: audioDataType) => {
    if (!mode) {
      const audio = audioDetails.file1.audio;
      if (audio) {
        audio.play();
        audio.volume = volume / 100;
        setDisplay(audioDetails.file1.name);
      }
    } else {
      const audio = audioDetails.file2.audio;
      if (audio) {
        audio.play();
        audio.volume = volume / 100;
        setDisplay(audioDetails.file2.name);
      }
    }
  };

  // Define a debounce function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    if (display) {
      const clearDisplayDebounced = debounce(() => {
        setDisplay("");
      }, 3000);

      const cancelDebounce = clearDisplayDebounced; // Assign the debounced clearDisplay function
      return () => cancelDebounce(); // Cleanup: call the debounced function
    }
  }, [display]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (keys.includes(event.key) && typeof window !== "undefined") {
        const filterDrum = audioData.filter((item) => item.key === event.key);
        if (power && filterDrum[0]) {
          playAudio(filterDrum[0]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [power, mode, volume]);

  return (
    <section
      id="drum-machine"
      className="max-w-[600px] w-full h-full p-5 bg-orange-900 shadow-xl shadow-orange-800 rounded-xl flex flex-col md:flex-row gap-10 relative"
    >
      <section id="audios" className="grid grid-cols-3 gap-2 w-full">
        {audioData.map((item) => (
          <button
            key={item.key}
            id={item.key}
            onClick={() => power && playAudio(item)}
            className="p-5 w-full rounded-lg shadow-xl border-2 border-transparent hover:border-orange-500 hover:bg-orange-800/80 aspect-square text-xl"
          >
            {item.key.toUpperCase()}
          </button>
        ))}
      </section>
      <section
        id="settings"
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <div>
          <label htmlFor="power-btn" className="block text-center pb-2">
            Power
          </label>
          <div className="p-3 border-2 border-blue-500 w-[50px] rounded-full relative overflow-hidden">
            <span
              className="p-3 bg-blue-500 block absolute rounded-full top-0 scale-125"
              style={{ left: power ? "50%" : "0" }}
            ></span>
            <input
              type="checkbox"
              name="power-btn"
              id="power-btn"
              title={`Power ${power ? "On" : "Off"}`}
              aria-label={`power button ${power ? "on" : "off"}`}
              checked={power}
              onChange={handlePower}
              className="border-4 absolute top-0 left-0 opacity-0 w-full h-full"
            />
          </div>
        </div>
        <p className="p-2 text-center bg-orange-950 w-[80%] rounded-lg">
          <span className="opacity-0">0</span>
          {display}
        </p>
        <div className="relative w-full h-8">
          <input
            type="range"
            name="volume"
            id="drum-volume"
            min={0}
            max={100}
            value={volume}
            className="w-full absolute top-0 opacity-0 z-10 h-full"
            onChange={handleVolume}
            title={`Volume ${volume}`}
          />
          <div
            id="slider-path"
            className="w-full h-2 bg-orange-950 rounded-full absolute top-1/2 -translate-y-1/2"
          />
          <div
            id="slider-point"
            className="w-2 h-full bg-blue-600 absolute top-0 rounded-full"
            style={{ left: `${volume - 2}%` }}
          />
        </div>
        <div>
          <label htmlFor="mode-btn" className="block text-center pb-2">
            Bank
          </label>
          <div className="p-3 border-2 border-blue-500 w-[50px] rounded-full relative overflow-hidden">
            <span
              className="p-3 bg-blue-500 block absolute rounded-full top-0 scale-125"
              style={{ left: mode ? "50%" : "0" }}
            ></span>
            <input
              type="checkbox"
              name="mode-btn"
              id="mode-btn"
              title={`Bank mode ${mode ? "On" : "Off"}`}
              aria-label={`Bank mode ${mode ? "on" : "off"}`}
              checked={mode}
              onChange={handleMode}
              className="border-4 absolute top-0 left-0 opacity-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Drum;
