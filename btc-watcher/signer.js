const { ethers } = require("ethers");
const config = require("./config");
const abi = require("../artifacts/contracts/BTCBridge.sol/BTCBridge.json").abi;

const provider = new ethers.JsonRpcProvider(config.rpcUrl);
const wallet = new ethers.Wallet(config.privateKey, provider);
const bridge = new ethers.Contract(config.bridgeContract, abi, wallet);

module.exports.mintWrappedBTC = async (btcTx) => {
  try {
    const btcTxIdBytes = ethers.keccak256(ethers.toUtf8Bytes(btcTx.txid));
    const amountWei = ethers.parseUnits(btcTx.amount.toString(), 8); // BTC = 8 decimals
    const tx = await bridge.mintFromBTC(wallet.address, amountWei, btcTxIdBytes);
    await tx.wait();
    return true;
  } catch (err) {
    console.error("Minting failed:", err);
    return false;
  }
};
