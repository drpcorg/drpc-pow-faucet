# PoWFaucet

Modularized faucet for EVM chains with different protection methods (Captcha, Mining, IP, Mainnet Balance, Gitcoin Passport and more)
Forked from https://github.com/pk910/PoWFaucet

```sh
npm i

docker compose up -d # start MySQL

cp .env.example .env

npm run start # start backend
npm run start:inspect # start backend with debugging available
```

# Build client

```sh
cd faucet-client
npm i
npm run build
```

Faucet starts at port 8888 by default

# License

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
