import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import { domainName } from "../const/yourDetails";
import "../styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai; //534354
//change the chainID to the scroll chain id

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: domainName,
        authUrl: "/api/auth",
      }}
    >
      <Head>
        <title>Web3Connect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn how to use the thirdweb Auth SDK to create an NFT Gated Website"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
