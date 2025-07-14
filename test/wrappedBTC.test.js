const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WrappedBTC", () => {
  let wBTC, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const WrappedBTC = await ethers.getContractFactory("WrappedBTC");
    BTCx = await WrappedBTC.deploy();
    await BTCx.deployed();
  });

  it("should mint and burn tokens", async () => {
    await BTCx.mint(user.address, 1000);
    expect(await xBTC.balanceOf(user.address)).to.equal(1000);

    await BTCx.burn(user.address, 500);
    expect(await BTCx.balanceOf(user.address)).to.equal(500);
  });
});
