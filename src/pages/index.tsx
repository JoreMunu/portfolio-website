import Head from "next/head";
import { AudioButton } from "~/components/AudioButton";

export default function Home() {
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
      <main className="grid min-h-screen max-w-screen-lg grid-cols-1 place-content-between gap-8 bg-white px-16 py-10 md:grid-cols-2">
        <div className="text-2xl">Jorė Gritėnaitė</div>
        <div className="flex flex-col items-start gap-8">
          <AudioButton
            file="/Mouthwash.mp3"
            name="to create the sense of intimacy when there’s none, 2023"
          />
          <AudioButton file="/Mouthwash.mp3" name="Mouthwash, 2023" />
          <AudioButton
            file="/hearing_you.mp3"
            name="Hearing You Is Nothing Like Reading You, 2023"
          />
        </div>
        <div>contact</div>
        <div>about</div>
      </main>
    </>
  );
}
