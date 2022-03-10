import GlobalStyle from "../../styles/globalStyle";
import React from "react";
import NavigationBar from '../components/NavigationBar';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
