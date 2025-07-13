export default function BTCDepositStatus({ txid, confirmed }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3>BTC Deposit Status</h3>
      <p><strong>TX ID:</strong> {txid}</p>
      <p><strong>Status:</strong> {confirmed ? "Confirmed" : "Pending Confirmation"}</p>
    </div>
  );
}
