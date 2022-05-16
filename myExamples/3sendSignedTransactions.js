const ethers = require("ethers")
const { INFURA_PROJECT_ENDPOINT_https, INFURA_PROJECT_ENDPOINT_GOERLI_https } = require("../variables")

const provider = new ethers.providers.JsonRpcProvider(
  INFURA_PROJECT_ENDPOINT_GOERLI_https
)

const senderAccount = {
  address: "0x51648d0B61bF6137D6De6faB6376355fCf41a5d8",
  privateKey:
    "d4dd000ea33fe99ce68373f726c19c2699740578fd6c6da201669ed9c71c4990",
}

const receiverAccount = {
  address: "0x399d869055dEe80B2a97D2B8f801A1A914644c35",
}

const walltet = new ethers.Wallet(senderAccount.privateKey, provider)

const main = async () => {

  //Show balance of sender before transfer
  const BalanceOfSenderBefore = await provider.getBalance(senderAccount.address)
  //Show balance of receiver before transfer
  const BalanceOfReceiverBefore = await provider.getBalance(receiverAccount.address)
  console.log(ethers.utils.formatEther(BalanceOfSenderBefore))
  console.log(ethers.utils.formatEther(BalanceOfReceiverBefore))
  
  // send transaction
  try {
    const tx = await walltet.sendTransaction({
      to: receiverAccount.address,
      value: ethers.utils.parseEther("0.025"),
    })
    
    //wait for the tx to be mined
    await tx.wait()
    console.log(tx)
  } 
  catch (error) {
    
  }

  //Show balance of sender after transfer  
  const BalanceOfSenderAfter = await provider.getBalance(senderAccount.address)
  //Show balance of receiver after transfer
  const BalanceOfReceiverAfter = await provider.getBalance(receiverAccount.address)
  console.log(ethers.utils.formatEther(BalanceOfSenderAfter))
  console.log(ethers.utils.formatEther(BalanceOfReceiverAfter))
}

main()
