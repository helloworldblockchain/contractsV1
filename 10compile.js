let solc =require('solc')
let fs=require('fs')
let sourceCode=fs.readFileSync('./contracts/SS2.sol','utf-8')
let output=solc.compile(sourceCode,1)
//console.log(output['contracts'][':SimpleStorage'])
module.exports=output['contracts'][':SimpleStorage']
