import "src/styles/global.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

interface Props extends AppProps {
  session: any;
}

export default function MyApp({ Component, pageProps, session }: Props) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
