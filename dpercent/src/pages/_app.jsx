import GlobalStyle from "../../styles/globalStyle";
import NavigationBar from '../components/NavigationBar';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
