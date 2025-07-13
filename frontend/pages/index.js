import { useState } from "react";
import WrapUnwrapForm from "../components/WrapUnwrapForm";
import BTCDepositStatus from "../components/BTCDepositStatus";

export default function Home() {
  const [btcStatus, setBtcStatus] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Wrapped Bitcoin Bridge</h1>
      <WrapUnwrapForm onDeposit={setBtcStatus} />
      {btcStatus && <BTCDepositStatus txid={btcStatus.txid} confirmed={btcStatus.confirmed} />}
    </div>
  );
}
