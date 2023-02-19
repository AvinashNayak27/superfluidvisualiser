import Outflows from "../components/Outflow";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import styles from "../styles/Home.module.css";
import MyComponent from "../components/Main";
function outflow() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
  });
  
  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Outflows />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default outflow;
