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
            file="/Hearing_You_Is_Nothing_Like_Reading_You.mp3"
            name="Hearing You Is Nothing Like Reading You, 2023"
          />
          <AudioButton file="/Mouthwash.mp3" name="Mouthwash, 2023" />
          <AudioButton
            file="/to_create_the_sense_of_intimacy_when_there_s_none.mp3"
            name="to create the sense of intimacy when there’s none, 2023"
          />
          <AudioButton
            file="/spring_sound_collection_2023.mp3"
            name="spring sound collection 2023, 2023"
          />
          <AudioButton file="/Babygirl.mp3" name="Babygirl, 2022" />
          <AudioButton
            file="/Paralyzing_Your_Tongue.mp3"
            name="Paralyzing Your Tongue, 2022"
          />
        </div>
        <div>contact</div>
        <div>about</div>
      </main>
    </>
  );
}
