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
                Ilonze Chibuikem | Electronics Engineer & Software Developer
              </title>
              <meta
                name="description"
                content="I'm Ilonze Chibuikem, an Electronics & Computer Engineering graduate and Software Developer specializing in embedded systems, web applications, and scalable software solutions."
              />
              <meta
                name="keywords"
                content="Ilonze Chibuikem, Electronics Engineer, Software Developer, Web Developer, Frontend Developer, Embedded Systems, IoT, JavaScript, React, Next.js, Tailwind CSS"
              />
              <meta name="author" content="Ilonze Chibuikem" />
              <meta name="robots" content="index, follow" />

              {/* Open Graph Meta Tags (for LinkedIn, Facebook, etc.) */}
              <meta
                property="og:title"
                content="Ilonze Chibuikem | Electronics Engineer & Software Developer"
              />
              <meta
                property="og:description"
                content="Electronics & Software Engineer skilled in embedded systems, web applications, and modern technologies like React, Next.js, and Tailwind CSS."
              />
              <meta
                property="og:image"
                content="/images/portfolio-preview.png"
              />
              <meta property="og:url" content="https://cmi-james.vercel.app/" />
              <meta property="og:type" content="website" />

              {/* Twitter Card Meta Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Ilonze Chibuikem | Electronics Engineer & Software Developer"
              />
              <meta
                name="twitter:description"
                content="Electronics & Software Engineer skilled in embedded systems, web applications, and modern technologies like React, Next.js, and Tailwind CSS."
              />
              <meta
                name="twitter:image"
                content="/images/portfolio-preview.png"
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </MemoryProvider>
    </SmoothScrollWrapper>
  );
}

export default MyApp;
