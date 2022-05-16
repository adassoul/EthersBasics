const ethers = require('ethers')

const { INFURA_PROJECT_ENDPOINT_https } = require('../variables')
const provider = new ethers.providers.JsonRpcProvider(INFURA_PROJECT_ENDPOINT_https)

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)'
]
const Dai = {
  address : '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  ABI : ERC20_ABI
}
const contract = new ethers.Contract(Dai.address, Dai.ABI, provider)

const xAddress = '0x6c6Bc977E13Df9b0de53b251522280BB72383700'

const main = async () => {
  const name = await contract.name()
  const symbol = await contract.symbol()
  const totalSupply = await contract.totalSupply()
  const balanceOfX = await contract.balanceOf(xAddress)
  const formattedBalanceOfX = ethers.utils.formatEther(balanceOfX)

  console.log('\nReading from :', Dai.address)
  console.log('name : ',name)
  console.log('symbol : ',symbol)
  console.log(`totalSupply : ${totalSupply}`)
  console.log(`balance of rich person on etherscan : ${formattedBalanceOfX}`)

  
  
}

main()