const ContractName = artifacts.require("ContractName")

module.exports = async function(callback) {
  try {
    
    const accounts = await web3.eth.getAccounts()
    
    const contract = await ContractName.deployed()
    console.log('Contract fetched', contract.address)
  }
  catch(error) {
    console.log(error)
  }

  callback()
}
