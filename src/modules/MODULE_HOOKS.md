ClientConfig
prio 1: github, passport, pow

SessionStart
prio 1: *maintenance_mode_check
prio 2: whitelist
prio 5: *eth_address_check
prio 6: concurrency-limit, ethinfo, ipinfo, mainnet-wallet, passport, recurring-limits
prio 10: pow

SessionRestore
prio 10: pow

SessionInfo
prio 1: passport, pow

SessionRewardFactor
prio 5: faucet-outflow, github, passport
prio 6: faucet-balance, ipinfo, whitelist

SessionRewarded
prio 5: faucet-outflow

SessionIpChange
prio 2: whitelist
prio 6: concurrency-limit, ipinfo

SessionComplete
prio 5: github
prio 10: pow

SessionClaim

SessionClaimed

SessionClose
