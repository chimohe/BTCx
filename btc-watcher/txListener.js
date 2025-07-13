const axios = require("axios");
const config = require("./config");

let seenTxs = new Set();

module.exports = async function listenForBTC(address, callback) {
  setInterval(async () => {
    const url = `https://blockstream.info/api/address/${address}/txs`;
    const { data } = await axios.get(url);
    data.forEach(tx => {
      if (!seenTxs.has(tx.txid)) {
        seenTxs.add(tx.txid);
        const amount = tx.vout.reduce((sum, o) => o.scriptpubkey_address === address ? sum + o.value : sum, 0);
        if (amount > 0) {
          callback({ txid: tx.txid, amount });
        }
      }
    });
  }, 15000);
};
