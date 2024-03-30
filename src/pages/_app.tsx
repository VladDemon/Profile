import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";

import Providers from "../components/Providers";

import '../styles/global.scss'

const Layout = dynamic( () => import("../components/Layout/Layout"), {
    loading: () => <p>Loading</p>
})

    


const MyApp = ({ Component, pageProps }: AppProps) : JSX.Element => {
    return (
        <div className="my-app">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="My Profile FrontEndDeveloper" />
                <title>MyProfile</title>
                <link rel='icon' href='/images/favicon.ico' />
            </Head>
            <Providers>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Providers>
        </div>
    );
};

export default MyApp;