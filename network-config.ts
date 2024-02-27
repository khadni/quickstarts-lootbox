export type NetworkConfig = Record<
  string,
  {
    name: string
    linkToken: string
    vrfCoordinatorV2Plus: string
    keyHash: string
    fundAmount: string
  }
>

export const networkConfig: NetworkConfig = {
  '11155111': {
    name: 'sepolia',
    linkToken: '0x779877A7B0D9E8603169DdbD7836e478b4624789',
    vrfCoordinatorV2Plus: 'XXX',
    keyHash:
      '0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c',
    fundAmount: '10000000000000000000', // 10 LINK
  },
  '31337': {
    name: 'hardhat',
    linkToken: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
    vrfCoordinatorV2Plus: 'XXX',
    keyHash:
      '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15',
    fundAmount: '10000000000000000000', // 10 LINK
  },
}
