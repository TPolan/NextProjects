import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar>
        <Component {...pageProps} />
      </NavigationBar>
    </>
  );
}

export default MyApp
