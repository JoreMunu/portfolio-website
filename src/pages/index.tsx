import Head from "next/head";
import { AudioButton } from "~/components/AudioButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jorė portfolio</title>
        <meta
          name="description"
          content="A portfolio website for showcasing audio art"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-screen-lg flex-col justify-between bg-white px-16 py-10">
        <div className="flex flex-row justify-between gap-12">
          <div className="text-2xl">Jorė Gritėnaitė</div>
          <div className="flex flex-col gap-4 items-start">
            <AudioButton
              file="/Mouthwash.mp3"
              name="to create the sense of intimacy when there’s none, 2023"
            />
            <AudioButton file="/Mouthwash.mp3" name="Mouthwash, 2023" />
          </div>
        </div>
        <div className="flex flex-row gap-24 text-xl">
          <div>contact</div>
          <div>about</div>
        </div>
      </main>
    </>
  );
}
