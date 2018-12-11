let instance=require('./30instance')
const from='0x986e1C368cD9aB2a63A98B0C6A0f0396EB55C040'
let test=async ()=>{
    try {
        let v1 = await instance.methods.getValue().call()
        console.log('v1:',v1)
        let res = await instance.methods.setValue('hellowuyue').send({
            from: from,
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