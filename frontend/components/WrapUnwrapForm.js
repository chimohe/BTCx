import { useState } from "react";

export default function WrapUnwrapForm({ onDeposit }) {
  const [btcTxId, setBtcTxId] = useState("");
  const [amount, setAmount] = useState("");

  const handleWrap = () => {
    // Simulate BTC deposit detection
    onDeposit({ txid: btcTxId, confirmed: false });
    alert("Simulated BTC deposit submitted. Waiting for confirmation.");
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <label>BTC Transaction ID:</label>
      <input type="text" value={btcTxId} onChange={(e) => setBtcTxId(e.target.value)} style={{ width: "100%" }} />

      <label>Amount (BTC):</label>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ width: "100%" }} />

      <button onClick={handleWrap} style={{ marginTop: "1rem" }}>Submit BTC Deposit</button>
    </div>
  );
}
