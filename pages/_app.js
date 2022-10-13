
import { Provider } from 'react-redux';

import store from '../redux/store';

import Header from '../components/layout/header';
function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>);
}

export default MyApp
