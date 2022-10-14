
import { Provider } from 'react-redux';
import Head from 'next/head'
import { useRouter } from 'next/router'

import store from '../redux/store';
import LayoutWrapper from '../components/layout';
import { getResolvedFinalPath } from '../helpers/routingPathHelper';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <Provider store={store}>
      <LayoutWrapper>
        <Head>
          <title>{getResolvedFinalPath(router)}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/webclip.png" />
        </Head>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>);
}

export default MyApp
