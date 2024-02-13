import { type AppType } from "next/app";
import { Crimson_Text } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const crimson = Crimson_Text({ weight: "400", subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={crimson.className}>
      <Component {...pageProps} />;
    </main>
  );
};

export default api.withTRPC(MyApp);
