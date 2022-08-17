import App from "next/app";
import React from "react";
import { GlobalStyling } from "../components/styles/globalStyle";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyling />
        <Component {...pageProps}></Component>
      </>
    );
  }
}
export default MyApp;
