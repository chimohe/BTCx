// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockBTCOracle {
    mapping(bytes32 => bool) public confirmed;

    function setConfirmed(bytes32 txId, bool status) external {
        confirmed[txId] = status;
    }

    function isConfirmed(bytes32 txId) external view returns (bool) {
        return confirmed[txId];
    }
}
