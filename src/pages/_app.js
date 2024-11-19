import Head from "next/head";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/scrollbar.css";
import "@/styles/project.css";
import { MemoryProvider } from "@/context/MemoryContext";

function MyApp({ Component, pageProps }) {
  return (
    <SmoothScrollWrapper>
      <MemoryProvider>
        <Layout>
          <Head>
            <title>James</title>
            <meta
              name="description"
              content="Default description for my website."
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
        
      </MemoryProvider>
    </SmoothScrollWrapper>
  );
}

export default MyApp;
