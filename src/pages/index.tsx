import Head from "next/head";
import { AudioButton } from "~/components/AudioButton";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const audioItems: {
  file: string;
  name: string;
}[] = [
  {
    file: "Listing.mp3",
    name: "Listing, 2024",
  },
  {
    file: "Hearing_You_Is_Nothing_Like_Reading_You.mp3",
    name: "Hearing You Is Nothing Like Reading You, 2023",
  },
  { file: "Mouthwash.mp3", name: "Mouthwash, 2023" },
  {
    file: "to_create_the_sense_of_intimacy_when_there_s_none.mp3",
    name: "to create the sense of intimacy when there’s none, 2023",
  },
  {
    file: "spring_sound_collection_2023.mp3",
    name: "spring sound collection 2023, 2023",
  },
  { file: "Babygirl.mp3", name: "Babygirl, 2022" },
  { file: "Paralyzing_Your_Tongue.mp3", name: "Paralyzing Your Tongue, 2022" },
];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const audioToPlay = searchParams.get("audio");
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    const setInteractedTrue = () => {
      setInteracted(true);
    };

    // Add event listeners for the 'click' and 'keydown' events
    window.addEventListener("click", setInteractedTrue);
    window.addEventListener("keydown", setInteractedTrue);

    // Clean up function
    return () => {
      window.removeEventListener("click", setInteractedTrue);
      window.removeEventListener("keydown", setInteractedTrue);
    };
  }, [searchParams]);

  return (
    <>
      <Head>
        <title>Jorė Gritėnaitė</title>
        <meta
          name="description"
          content="A portfolio website for showcasing audio art"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen w-full grid-cols-1 place-content-between gap-8 bg-white px-16 py-10 md:grid-cols-3">
        <div className="w-min whitespace-nowrap text-2xl">Jorė Gritėnaitė</div>
        <div className="col-span-2 flex w-full flex-1 flex-grow flex-col items-start gap-8">
          {audioItems.map((item) => (
            <AudioButton
              key={item.file}
              file={`/${item.file}`}
              name={item.name}
              play={interacted && item.file === audioToPlay}
              onClick={() =>
                item.file === audioToPlay
                  ? router.push("/")
                  : router.push(
                      { query: { ...router.query, audio: item.file } },
                      undefined,
                      {
                        shallow: true,
                      },
                    )
              }
            />
          ))}
        </div>
        <Link
          className="w-min whitespace-nowrap underline transition hover:opacity-80"
          href="mailto:jore.gritenaite@gmail.com"
        >
          jore.gritenaite@gmail.com
        </Link>
        <Link
          className="col-span-2 flex-grow transition hover:opacity-80"
          href="/about"
        >
          about
        </Link>
      </main>
    </>
  );
}
