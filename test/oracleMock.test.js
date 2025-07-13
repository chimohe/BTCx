const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MockBTCOracle", () => {
  let oracle, txId;

  beforeEach(async () => {
    const MockBTCOracle = await ethers.getContractFactory("MockBTCOracle");
    oracle = await MockBTCOracle.deploy();
    await oracle.deployed();

    txId = ethers.keccak256(ethers.toUtf8Bytes("mock_tx"));
  });

  it("confirms and reads transaction status", async () => {
    await oracle.setConfirmed(txId, true);
    expect(await oracle.isConfirmed(txId)).to.be.true;
  });
});
