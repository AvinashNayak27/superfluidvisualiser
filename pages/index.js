import styles from '../styles/Home.module.css';
import Inflow from '../components/Inflow';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const Home = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
  });

  return (
    <ApolloProvider client={client}>
    <div className={styles.container}>
      <div className={styles.main}>
        <Inflow/>
      </div>
    </div>
    </ApolloProvider>
  );
};

export default Home;
