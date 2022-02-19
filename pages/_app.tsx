import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Container from "@mui/material/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar>
        <Container>
          <Component {...pageProps} />
        </Container>
      </NavigationBar>
    </>
  );
}

export default MyApp;
