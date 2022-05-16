const ethers = require('ethers')
const DaiJsonAbi = require('../Dai_abi.json')
const fs = require('fs')

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

const ifaceFull = new ethers.utils.Interface(DaiJsonAbi) 
const ifaceMinimal = new ethers.utils.Interface(DaiJsonAbi) 
const ifaceJson = new ethers.utils.Interface(DaiJsonAbi) 
const ifaceSighash = new ethers.utils.Interface(DaiJsonAbi) 
ifaceFull.format(ethers.utils.FormatTypes.minimal)
ifaceMinimal.format(ethers.utils.FormatTypes.minimal)
ifaceJson.format(ethers.utils.FormatTypes.minimal)
ifaceSighash.format(ethers.utils.FormatTypes.minimal)
// const fragments = iface.fragments
fs.writeFileSync('./writtenIfaceFull.json', JSON.stringify(ifaceFull))
fs.writeFileSync('./writtenIfaceMinimal.json', JSON.stringify(ifaceMinimal))
fs.writeFileSync('./writtenIfaceJson.json', JSON.stringify(ifaceJson))
fs.writeFileSync('./writtenIfaceSighash.json', JSON.stringify(ifaceSighash))

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

  console.log(`iface : ${iface}`)
  console.log(JSON.stringify(iface).length)
  // console.log(iface)
  fs.writeFileSync('./writtenIface.json', JSON.stringify(iface))

  // console.log(`DaiJsonAbi : ${DaiJsonAbi}`)
  // console.log(DaiJsonAbi.length)
  // console.log(typeof(DaiJsonAbi))
  // console.log(DaiJsonAbi)
  // fs.writeFileSync('./writtenAbi.json', JSON.stringify(DaiJsonAbi))

  // console.log(`fragments : ${fragments}`)
  // console.log(fragments.length)
  // // console.log(fragments)
  // fs.writeFileSync('./writtenFragments.json', JSON.stringify(fragments))

  console.log(typeof(DaiJsonAbi))
  
}

// main()