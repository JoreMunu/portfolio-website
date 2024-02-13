import { useState, useEffect } from "react";

const useAudio: (url: string) => [boolean, () => void] = (url) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    if (typeof window !== "undefined") {
      setAudio(new Audio(url));
    }
  }, [url]);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (audio) {
      void (playing ? audio.play() : audio.pause());
    }
  }, [playing, audio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }
  }, [audio]);

  return [playing, toggle];
};

export default useAudio;
