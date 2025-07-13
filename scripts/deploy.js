const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
  const wBTC = await WrappedBTC.deploy();
  await wBTC.deployed();
  console.log("WrappedBTC deployed to:", wBTC.address);

  const BTCBridge = await ethers.getContractFactory("BTCBridge");
  const bridge = await BTCBridge.deploy(wBTC.address);
  await bridge.deployed();
  console.log("BTCBridge deployed to:", bridge.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
