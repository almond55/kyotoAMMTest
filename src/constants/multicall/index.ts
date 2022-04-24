import { ChainId } from '@nguyenphu27/sdk'
import MULTICALL_ABI from './abi.json'

// const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
//  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
//  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
// }

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd4Fca5E7c9f1A8c20a155bB2Aae7A8a657380Ab0',
  [ChainId.TESTNET]: '0xd4Fca5E7c9f1A8c20a155bB2Aae7A8a657380Ab0'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
