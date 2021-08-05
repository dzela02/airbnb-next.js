import "tailwindcss/tailwind.css";
import "../styles/global.css";
import Router from "next/router";

import ProgressBar from "@badrap/bar-of-progress";

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routerChangeComplete", progress.finish);
  Router.events.on("routerChangeError", progress.finish);
  return <Component {...pageProps} />;
}

export default MyApp;
