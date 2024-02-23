import { useEffect, useRef } from "react";

export function AudioButton({
  file,
  name,
  play,
  onClick,
}: {
  file: string;
  name: string;
  play: boolean;
  onClick: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      play ? void audioRef.current.play() : void audioRef.current.pause();
    }
  }, [play]);

  return (
    <button
      className={`text-start text-4xl italic transition hover:opacity-80 ${play ? "text-gray-500" : "text-black"}`}
      onClick={onClick}
    >
      {name}
      <audio ref={audioRef} src={file} />
    </button>
  );
}
