# BTCx

# Wrapped Bitcoin Bridge

This project allows users to deposit BTC and receive Wrapped Bitcoin (BTCx) on Ethereum. It's a hybrid off-chain + smart contract system with a full-stack interface.

## Features

- Deposit BTC → mint ERC-20 BTCx
- Burn BTCx → withdraw BTC
- BTC watcher runs off-chain
- Frontend for wrap/unwrap interactions

## Usage

1. Install dependencies: `npm install`
2. Compile contracts: `npx hardhat compile`
3. Run tests: `npx hardhat test`
4. Start frontend: `npm run dev` or `docker-compose up`

## Structure

- `contracts/` - BTCx + bridge contracts
- `btc-watcher/` - BTC monitoring scripts
- `frontend/` - Web UI
- `scripts/` - Deploy & interaction scripts

## License

MIT

Created by ChatGPT
