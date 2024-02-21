import useAudio from "~/hooks/useAudio";

export function AudioButton({ file, name }: { file: string; name: string }) {
  const [playing, toggle] = useAudio(file);

  return (
    <button
      className={`text-start text-4xl italic transition hover:opacity-80 ${playing ? "text-gray-500" : "text-black"}`}
      onClick={toggle}
    >
      {name}
    </button>
  );
}
