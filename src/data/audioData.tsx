type audioDataType = {
  key: "q" | "w" | "e" | "a" | "s" | "d" | "z" | "x" | "c";
  file1: { name: string; audio: HTMLAudioElement };
  file2: { name: string; audio: HTMLAudioElement };
};
const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const getAudioData = (): audioDataType[] => {
  if (typeof window !== "undefined") {
    return [
      {
        key: "q",
        file1: { name: "Heater 1", audio: new Audio("/drums/d1/Heater-1.mp3") },
        file2: { name: "Cord 1", audio: new Audio("/drums/d2/Chord_1.mp3") },
      },
      {
        key: "w",
        file1: { name: "Heater 2", audio: new Audio("/drums/d1/Heater-2.mp3") },
        file2: { name: "Cord 2", audio: new Audio("/drums/d2/Chord_2.mp3") },
      },
      {
        key: "e",
        file1: { name: "Heater 3", audio: new Audio("/drums/d1/Heater-3.mp3") },
        file2: { name: "Chord 3", audio: new Audio("/drums/d2/Chord_3.mp3") },
      },
      {
        key: "a",
        file1: {
          name: "Heater 4",
          audio: new Audio("/drums/d1/Heater-4_1.mp3"),
        },
        file2: {
          name: "Shaker",
          audio: new Audio("/drums/d2/Give_us_a_light.mp3"),
        },
      },
      {
        key: "s",
        file1: { name: "Clap", audio: new Audio("/drums/d1/Heater-6.mp3") },
        file2: { name: "Open HH", audio: new Audio("/drums/d2/Dry_Ohh.mp3") },
      },
      {
        key: "d",
        file1: { name: "Open HH", audio: new Audio("/drums/d1/Dsc_Oh.mp3") },
        file2: { name: "Closed HH", audio: new Audio("/drums/d2/Bld_H1.mp3") },
      },
      {
        key: "z",
        file1: {
          name: "Kick n' Hat",
          audio: new Audio("/drums/d1/Kick_n_Hat.mp3"),
        },
        file2: {
          name: "Punchy Kick",
          audio: new Audio("/drums/d2/punchy_kick_1.mp3"),
        },
      },
      {
        key: "x",
        file1: { name: "Kick", audio: new Audio("/drums/d1/RP4_KICK_1.mp3") },
        file2: {
          name: "Side Stick",
          audio: new Audio("/drums/d2/side_stick_1.mp3"),
        },
      },
      {
        key: "c",
        file1: { name: "Closed HH", audio: new Audio("/drums/d1/Cev_H2.mp3") },
        file2: { name: "Snare", audio: new Audio("/drums/d2/Brk_Snr.mp3") },
      },
    ];
  } else return [];
};

export type { audioDataType };
export { keys, getAudioData };
