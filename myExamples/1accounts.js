const { ethers } = require('ethers')
const { INFURA_PROJECT_ENDPOINT_https } = require('../variables')

const provider = new ethers.providers.JsonRpcProvider(INFURA_PROJECT_ENDPOINT_https)

const ethAddress = '0xaf4FA1b01C87247C7d56aBC45805650fBE149F03'

const main = async () => {
  const balance = await provider.getBalance(ethAddress)
  console.log(`the balance of the address ${ethAddress} is ${ethers.utils.formatEther(balance)} Ether`)
}

main()