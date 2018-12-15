let HDWalletProvider=require('truffle-hdwallet-provider')

let Web3=require('web3')

let web3=new Web3()

let terms='twenty outdoor wild motion imitate among blur false scorpion upset donor actual'


let netIp='https://ropsten.infura.io/v3/b2e6d9ff9979405cb45f29a15776c522'

let provider=new HDWalletProvider(terms,netIp)
web3.setProvider(provider)

let instance=require('./30instance')

let test=async ()=>{
    try {
        let accounts=await web3.eth.getAccounts()
        let v1 = await instance.methods.getValue().call()
        console.log('v1:',v1)
        let res = await instance.methods.setValue('hellowuyue').send({
            from: accounts[0],
            gas:'3000000',
            value: 0
        })
        console.log('res:',res)
        let v2 = await instance.methods.getValue().call()
        console.log('v2:',v2)
    } catch (e) {
        console.log(e)
    }
}

test()