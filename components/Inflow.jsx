import { useLazyQuery } from '@apollo/client';
import { GET_STREAMS } from '../Graphql/Queries';
import styles from '../styles/Home.module.css';

function Inflows() {
  const [getAccount, { loading, error, data }] = useLazyQuery(GET_STREAMS);

  function handleSubmit(event) {
    event.preventDefault();
    const id = event.target.elements.id.value;
    getAccount({ variables: { id } });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const inflows = data?.account.inflows.filter(inflow => inflow.currentFlowRate > 0);
  const outflows = data?.account.outflows.filter(outflow => outflow.currentFlowRate > 0);
  console.log(inflows);
  console.log(outflows);

  return (
    <div className={styles.form}>
      <h1>Get Streams</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" className={styles.input} />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <h1>INFLOWS</h1>
      {inflows && inflows.length > 0 && (
        <div>

          {inflows.map(inflow => (
            <div key={inflow.sender.id} className={styles.block}>
              <p>Current Flow Rate: {inflow.currentFlowRate}</p>
              <p>Token Symbol: {inflow.token.symbol}</p>
              <p>Sender: {inflow.sender.id}</p>
            </div>
          ))}
        </div>
      )}
      {!loading && data && (!data.account || data.account.inflows.length === 0) && (
        <p>No inflows available for this address.</p>
      )}
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

export default Inflows;
