// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./WrappedBTC.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BTCBridge is Ownable {
    WrappedBTC public wrappedBTC;
    mapping(bytes32 => bool) public processedDeposits;

    event BTCMinted(address indexed to, uint256 amount, bytes32 btcTxId);
    event BTCBurned(address indexed from, uint256 amount);

    constructor(address _wrappedBTC) {
        wrappedBTC = WrappedBTC(_wrappedBTC);
    }

    function mintFromBTC(address to, uint256 amount, bytes32 btcTxId) external onlyOwner {
        require(!processedDeposits[btcTxId], "BTC tx already processed");
        processedDeposits[btcTxId] = true;
        wrappedBTC.mint(to, amount);
        emit BTCMinted(to, amount, btcTxId);
    }

    function burnForBTC(uint256 amount) external {
        wrappedBTC.burn(msg.sender, amount);
        emit BTCBurned(msg.sender, amount);
    }
}
