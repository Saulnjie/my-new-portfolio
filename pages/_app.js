import GlobalStyle from "../styles/globals";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Head from "next/head";

/* PRIMARY COMPONENTS */
const Main = styled.div`
  width: 100%;
  flex: 1 0 auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Body>
        <Main>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Main>
      </Body>
    </>
  );
}

export default MyApp;
