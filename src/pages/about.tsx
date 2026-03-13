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
        <div>Jorė Gritėnaitė (*2001)</div>
        <div className="flex flex-col items-start gap-8">
          <p>
            Lithuanian artist based in Zürich. In 2024, she graduated with a BA
            in Fine Arts from the Zürich University of the Arts. Jorė is
            currently studying for a MA in Fine Arts at the same institution.
            Alongside her major in Fine Arts, she is also pursuing a minor in
            Sound: Auditory Cultures and Sonic Arts. Jorė’s works have been
            exhibited in Lithuania, Switzerland, Austria and New York. In her
            artistic practice, Jorė composes sound pieces based on both original
            and found text using her own voice as a core medium. It is utilized
            as an instrument when invasive and intimate qualities of sound are
            investigated. Sound compositions result in installations in space,
            headphone pieces, take the form of a performance and listening
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
