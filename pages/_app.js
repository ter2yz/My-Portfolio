import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ProvideGlobal } from "../lib/contexts/GlobalContext";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence initial exitBeforeEnter>
            <ProvideGlobal>
                <motion.div
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                    }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </ProvideGlobal>
        </AnimatePresence>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
