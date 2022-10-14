
import { Provider } from 'react-redux';

import store from '../redux/store';
import LayoutWrapper from '../components/layout';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </Provider>);
}

export default MyApp
