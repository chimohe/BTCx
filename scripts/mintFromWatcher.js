const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();
  const bridge = await ethers.getContract("BTCBridge", signer);

  const recipient = signer.address;
  const amount = ethers.parseUnits("0.01", 8); // 0.01 BTC
  const btcTxId = ethers.keccak256(ethers.toUtf8Bytes("dummy_tx_hash"));

  const tx = await bridge.mintFromBTC(recipient, amount, btcTxId);
  await tx.wait();
  console.log("Minted BTCx from BTC tx:", btcTxId);
}

main().catch(console.error);
