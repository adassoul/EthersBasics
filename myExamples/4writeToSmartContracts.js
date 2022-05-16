const ethers = require('ethers')
const { INFURA_PROJECT_ENDPOINT_KOVAN_https } = require('../variables')

//testNet provider
const kovanProvider = new ethers.providers.JsonRpcProvider(INFURA_PROJECT_ENDPOINT_KOVAN_https)
//sender
const senderAccount = {
  address : '0x51648d0B61bF6137D6De6faB6376355fCf41a5d8',
  privateKey : 'd4dd000ea33fe99ce68373f726c19c2699740578fd6c6da201669ed9c71c4990'
}
//receiver
const receiverAccount = {
  address : '0x399d869055dEe80B2a97D2B8f801A1A914644c35'
}

//wallet
const wallet = new ethers.Wallet(senderAccount.privateKey, kovanProvider)

const abi = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address, uint) payable returns (bool)'
]

//chainlink
const ChainLink = {
  address : '0xa36085f69e2889c224210f603d836748e7dc0088',
}
//contract
ethers.Contract()
const main = async () => {

}