// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBitcoinOracle {
    function isConfirmed(bytes32 btcTxId) external view returns (bool);
}
