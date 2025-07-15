# Wrapped Bitcoin Bridge Protocol

This project enables BTC holders to mint wrapped BTC (BTCx) on Ethereum by depositing Bitcoin to a monitored address. The system mints ERC-20 wBTC tokens, which users can burn later to initiate BTC withdrawals.

## Features

- Monitor Bitcoin deposits using off-chain scripts
- Mint and burn ERC-20 BTCx on Ethereum
- Confirm deposits via Bitcoin tx hash
- Simulate debit card-style redemption in future integrations

## Flow

1. User deposits BTC to a monitored address
2. Off-chain service detects transaction
3. Ethereum contract mints wBTC for the user
4. BTCx can be burned to request BTC withdrawal

See scripts and frontend folder for integration.
