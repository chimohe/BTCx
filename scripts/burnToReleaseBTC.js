const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();
  const bridge = await ethers.getContract("BTCBridge", signer);

  const amount = ethers.parseUnits("0.005", 8); // 0.005 BTC
  const tx = await bridge.burnForBTC(amount);
  await tx.wait();
  console.log("wBTC burned to initiate BTC release");
}

main().catch(console.error);
