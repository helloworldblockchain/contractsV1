let Web3=require('web3')
let web3=new Web3()
web3.setProvider('HTTP://127.0.0.1:7545')

let abi=[{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_str","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

let addr='0x72aBa53BA047Dd822358aC952cD1AA37A6a63f41'

let contractInstance=new web3.eth.Contract(abi,addr)
module.exports=contractInstance