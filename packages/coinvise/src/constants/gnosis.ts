import { CHAIN_ID } from "../constants/chains";

export const GNOSIS_API_URL: Partial<Record<CHAIN_ID, string>> = {
  [CHAIN_ID.MAINNET]: "https://safe-transaction.mainnet.gnosis.io/",
  [CHAIN_ID.RINKEBY]: "https://safe-transaction.rinkeby.gnosis.io/",
  [CHAIN_ID.GOERLI]: "https://safe-transaction.goerli.gnosis.io/",
  [CHAIN_ID.POLYGON_MAINNET]: "https://safe-transaction.polygon.gnosis.io/",
};
