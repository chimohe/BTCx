const listenForBTC = require("./txListener");
const config = require("./config");

console.log("Starting BTC deposit watcher...");

listenForBTC(config.watchAddress, async (btcTx) => {
  console.log(`BTC deposit detected: ${btcTx.txid}, amount: ${btcTx.amount} BTC`);
  const success = await require("./signer").mintWrappedBTC(btcTx);
  if (success) console.log("wBTC minted on Ethereum.");
});
