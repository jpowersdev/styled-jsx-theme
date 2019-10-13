// pages/_app.js
import App from 'next/app';
import Theme from '../styles/Theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Theme />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
