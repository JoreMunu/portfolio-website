import Head from "next/head";
import Link from "next/link";

export default function About() {
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
          <p>Lithuanian artist currently based in Zurich.</p>
          <p className="italic">Artist Statement</p>
          <p>
            My own voice is a core medium of my work. In my artistic practice I
            compose sound pieces based on both original and found text. I
            believe in the invasive and intimate quality of the sound works
            utilizing a voice as an instrument. The subjects of my works include
            traditional and contemporary readings of cultural and social
            structures such as marriage and family, as well as concepts and
            myths around femininity, love, and power. Sound compositions result
            in installations, head-phone pieces, or take the form of a listening
            session.
          </p>
        </div>
        <Link
          className="underline transition hover:opacity-80"
          href="mailto:jore.gritenaite@gmail.com"
        >
          jore.gritenaite@gmail.com
        </Link>
        <Link className="transition hover:opacity-80" href="/">
          works
        </Link>
      </main>
    </>
  );
}
