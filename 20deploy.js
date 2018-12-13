let {bytecode,interface}=require('./10compile')
let HDWalletProvider=require('truffle-hdwallet-provider')

let Web3=require('web3')

let web3=new Web3()

let terms='twenty outdoor wild motion imitate among blur false scorpion upset donor actual'


let netIp='https://ropsten.infura.io/v3/b2e6d9ff9979405cb45f29a15776c522'

let provider=new HDWalletProvider(terms,netIp)

web3.setProvider(provider)



let contract=new web3.eth.Contract(JSON.parse(interface))


let deploy=async ()=>{
    let accounts=await web3.eth.getAccounts()

    let Instance= await contract.deploy({
        data:bytecode,
        arguments:['helloworld']
    }).send({
        from:accounts[0],
        gas:'300000'
    })
    console.log('Instance:',Instance.options.address)
}
deploy()