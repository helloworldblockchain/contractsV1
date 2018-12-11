let {bytecode,interface}=require('./10compile')


let Web3=require('web3')

let web3=new Web3()

web3.setProvider('HTTP://127.0.0.1:7545')

const account='0x986e1C368cD9aB2a63A98B0C6A0f0396EB55C040'

let contract=new web3.eth.Contract(JSON.parse(interface))
contract.deploy({
    data:bytecode,
    arguments:['helloworld']
}).send({
    from:account,
    gas:'300000'
}).then(instance=>{
    console.log('address:',instance.options.address)
})