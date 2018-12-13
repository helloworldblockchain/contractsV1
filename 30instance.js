let HDWalletProvider=require('truffle-hdwallet-provider')

let Web3=require('web3')

let web3=new Web3()

let terms='twenty outdoor wild motion imitate among blur false scorpion upset donor actual'


let netIp='https://ropsten.infura.io/v3/b2e6d9ff9979405cb45f29a15776c522'

let provider=new HDWalletProvider(terms,netIp)
web3.setProvider(provider)

let abi=[{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

let addr='0x9145De2Dd9E3d31327E0a0d70Fe51Dbb33D834cD'

let contractInstance=new web3.eth.Contract(abi,addr)
console.log('address:',contractInstance.options.address)
module.exports=contractInstance