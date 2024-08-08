// pages/_app.js
import SmoothScrollWrapper from '@/components/SmoothScrollWrapper';
import Layout from '@/components/Layout';  // Import the Layout component
import '@/styles/globals.css';
import "@/styles/navbar.css";
import "@/styles/scrollbar.css"
function MyApp({ Component, pageProps }) {
  return (
    <SmoothScrollWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SmoothScrollWrapper>
  );
}

export default MyApp;
