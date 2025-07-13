const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BTCBridge", () => {
  let wBTC, bridge, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
    wBTC = await WrappedBTC.deploy();
    await wBTC.deployed();

    const BTCBridge = await ethers.getContractFactory("BTCBridge");
    bridge = await BTCBridge.deploy(wBTC.address);
    await bridge.deployed();
    await wBTC.transferOwnership(bridge.address);
  });

  it("mints wBTC from BTC tx", async () => {
    const btcTxId = ethers.keccak256(ethers.toUtf8Bytes("btc_tx_hash"));
    await bridge.mintFromBTC(user.address, 1000, btcTxId);
    expect(await wBTC.balanceOf(user.address)).to.equal(1000);
  });

  it("burns wBTC for BTC redemption", async () => {
    const btcTxId = ethers.keccak256(ethers.toUtf8Bytes("btc_tx_hash"));
    await bridge.mintFromBTC(user.address, 1000, btcTxId);
    await wBTC.connect(user).approve(bridge.address, 1000);
    await bridge.connect(user).burnForBTC(1000);
    expect(await wBTC.balanceOf(user.address)).to.equal(0);
  });
});
