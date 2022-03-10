import Head from 'next/head';
import AboutMain from "../components/AboutMain";
import { useEffect } from "react";

function About() {



  return (
    <>
      <Head>
        <title>About | D.Percent</title>
      </Head>
        <AboutMain/>
    </>
  );
}

export default About;
