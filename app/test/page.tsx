"use client";

import { useState } from "react";

const audioData = [
  { name: "Q", file: new Audio("/drums/Heater-1.mp3") },
  { name: "W", file: new Audio("/drums/Heater-2.mp3") },
  { name: "E", file: new Audio("/drums/Heater-3.mp3") },
  { name: "A", file: new Audio("/drums/Heater-4_1.mp3") },
  { name: "S", file: new Audio("/drums/Heater-6.mp3") },
  { name: "D", file: new Audio("/drums/Dsc_Oh.mp3") },
  { name: "Z", file: new Audio("/drums/Kick_n_Hat.mp3") },
  { name: "X", file: new Audio("/drums/RP4_KICK_1.mp3") },
  { name: "C", file: new Audio("/drums/Cev_H2.mp3") },
];

const AudioPlayer = () => {
  //   const [audio] = useState(new Audio("/drums/Cev_H2.mp3"));
  const [audio] = useState(audioData);
  const [volume, setVolume] = useState(0.4);

  const playAudio = (i: number) => {
    audio[i].file.play();
    // audio[i].file.volume = 0.1;
  };

  return (
    <div>
      {audio.map((item, i) => (
        <button
          onClick={() => playAudio(i)}
          key={item.name}
          className="border block p-5 py-2 mb-2"
        >
          Play Audio {item.name}
        </button>
      ))}
    </div>
  );
  //   return <button onClick={playAudio}>Play Audio</button>;
};

export default AudioPlayer;

// import { LegacyRef, useRef } from "react";

// const AudioPlayer = () => {
//   const audioRef = useRef<LegacyRef<HTMLAudioElement> | null>(null);

//   const playAudio = () => {
//     audioRef?.current?.play();
//   };

//   return (
//     <div>
//       <p>Click on the play button to play a sound:</p>
//       <button onClick={playAudio}>Play Audio</button>
//       <audio ref={audioRef}>
//         <source src="/drums/Cev_H2.mp3" type="audio/ogg" />
//         <source src="/drums/Cev_H2.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default AudioPlayer;
