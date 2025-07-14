const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BTCBridge", () => {
  let BTCx, bridge, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
    BTCx = await WrappedBTC.deploy();
    await BTCx.deployed();

    const BTCBridge = await ethers.getContractFactory("BTCBridge");
    bridge = await BTCBridge.deploy(wBTC.address);
    await bridge.deployed();
    await BTCx.transferOwnership(bridge.address);
  });

  it("mints wBTC from BTC tx", async () => {
    const btcTxId = ethers.keccak256(ethers.toUtf8Bytes("btc_tx_hash"));
    await bridge.mintFromBTC(user.address, 1000, btcTxId);
    expect(await wBTC.balanceOf(user.address)).to.equal(1000);
  });

  it("burns wBTC for BTC redemption", async () => {
    const btcTxId = ethers.keccak256(ethers.toUtf8Bytes("btc_tx_hash"));
    await bridge.mintFromBTC(user.address, 1000, btcTxId);
    await BTCx.connect(user).approve(bridge.address, 1000);
    await bridge.connect(user).burnForBTC(1000);
    expect(await BTCx.balanceOf(user.address)).to.equal(0);
  });
});
