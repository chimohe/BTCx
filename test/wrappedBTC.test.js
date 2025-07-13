const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WrappedBTC", () => {
  let wBTC, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
    wBTC = await WrappedBTC.deploy();
    await wBTC.deployed();
  });

  it("should mint and burn tokens", async () => {
    await wBTC.mint(user.address, 1000);
    expect(await wBTC.balanceOf(user.address)).to.equal(1000);

    await wBTC.burn(user.address, 500);
    expect(await wBTC.balanceOf(user.address)).to.equal(500);
  });
});
