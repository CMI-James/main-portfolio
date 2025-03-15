import Head from "next/head";
import SmoothScrollWrapper from "@/components/ui/SmoothScrollWrapper";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/scrollbar.css";
import "@/styles/project.css";
import "@/styles/imageScroll.css";
import { MemoryProvider } from "@/context/MemoryContext";
import { ThemeProvider } from "@/context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <SmoothScrollWrapper>
      <MemoryProvider>
        <ThemeProvider>
          <Layout>
            <Head>
              <title>
                Ilonze Chibuikem | Software Engineer & Web Developer
              </title>
              <meta
                name="description"
                content="I'm Ilonze Chibuikem, a Software Engineer specializing in building modern, performant, and scalable web applications."
              />
              <meta
                name="keywords"
                content="Ilonze Chibuikem, Software Engineer, Web Developer, Frontend Developer, JavaScript, React, Next.js, Tailwind CSS"
              />
              <meta name="author" content="Ilonze Chibuikem" />
              <meta name="robots" content="index, follow" />

              {/* Open Graph Meta Tags (for LinkedIn, Facebook, etc.) */}
              <meta
                property="og:title"
                content="Ilonze Chibuikem | Software Engineer & Web Developer"
              />
              <meta
                property="og:description"
                content="Building modern and scalable web applications with React, Next.js, and Tailwind CSS."
              />
              <meta property="og:image" content="/images/portfolio-preview.png" />
              <meta property="og:url" content="https://cmi-james.vercel.app/" />
              <meta property="og:type" content="website" />

              {/* Twitter Card Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Ilonze Chibuikem | Software Engineer & Web Developer"
              />
              <meta
                name="twitter:description"
                content="Building modern and scalable web applications with React, Next.js, and Tailwind CSS."
              />
              <meta name="twitter:image" content="/images/portfolio-preview.png" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MemoryProvider>
    </SmoothScrollWrapper>
  );
}

export default MyApp;
