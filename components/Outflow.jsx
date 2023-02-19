import { useLazyQuery } from '@apollo/client';
import { GET_STREAMS } from "../Graphql/Queries";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Outflows() {
  const [getAccount, { loading, error, data }] = useLazyQuery(GET_STREAMS);
  const [fetchedData, setFetchedData] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const id = event.target.elements.id.value;
    getAccount({ variables: { id } });
  }
  useEffect(() => {
    if (data) {
      setFetchedData(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // Assuming the GraphQL query has been executed and the response data is stored in a variable called "data"
  const outflows = data?.account.outflows.filter(outflow => outflow.currentFlowRate > 0);


  return (
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="id" className={styles.input} />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
        <h1>OUTFLOWS</h1>
        {outflows && outflows.length > 0 && (
          <div>

            {outflows.map(outflow => (
              <div key={outflow.receiver.id}>
                <p>Current Flow Rate: {outflow.currentFlowRate}</p>
                <p>Token Symbol: {outflow.token.symbol}</p>
                <p>Receiver: {outflow.receiver.id}</p>
              </div>
            ))}
          </div>
        )}
        {!loading && data && (!data.account || data.account.outflows.length === 0) && (
          <p>No outflows available for this address.</p>
        )}

      </div>
  );
}


