const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
  const BTCx = await WrappedBTC.deploy();
  await BTCx.deployed();
  console.log("WrappedBTC deployed to:", wBTC.address);

  const BTCBridge = await ethers.getContractFactory("BTCBridge");
  const bridge = await BTCBridge.deploy(BTCx.address);
  await bridge.deployed();
  console.log("BTCBridge deployed to:", bridge.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
