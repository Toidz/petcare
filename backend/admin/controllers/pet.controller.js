const Pet = require("../models/pet.model")
const random = require("../../helper/random")
module.exports.createPost = async (req,res)=>{
    const code = "PE" + random.RandomNumber(6)
    req.body.petCode = code
    if(req.body.position){
        req.body.position = parseInt(req.body.position)
    }
    else{
        const position = await Pet.countDocuments({})
        req.body.position = position +1
    }
    req.body.price = req.body.price? parseInt(req.body.price): 0
    req.body.quantity = req.body.quantity? parseInt(req.body.quantity): 0
    req.body.createdBy = req.account.id
    req.body.updatedBy = req.account.id
    const exitsPet = await Pet.findOne({
        name: req.body.name
    })
    if(exitsPet){
        res.json({
            code:"error",
            message:"Thú cưng này đã có trong hệ thống!"
        })
        return
    }
    const dataFinal = new Pet(req.body)
    await dataFinal.save()
    res.json({
        code:"success",
        message:"Tạo thú cưng mới thành công!"
    })
}
module.exports.editPatch = async (req,res) =>{
    try {
        const current = req.body.current
        const id = req.params.id
        if(req.body.position){
            req.body.position= parseInt(req.body.position)
        }
        else{
            const totalCount= await Pet.countDocuments({})
            req.body.position = totalCount +1
        }

        req.body.price = req.body.price? parseInt(req.body.price): 0
        req.body.quantity = req.body.quantity? parseInt(req.body.quantity): 0
        req.body.updatedBy = req.account.id
        const exitsPet = await Pet.findOne({
            name: current
        })
        if(exitsPet && exitsPet.name!=req.body.name){
            res.json({
                code:"error",
                message:"Tên thú cưng đã tồn tại!"
            })
            return
        }
        await Pet.updateOne({
            _id:id,
            deleted:false
        },req.body)
       
        res.json({
            code:"success"
        })
       
    } catch (error) {
        res.json({
            code:"error",
            message:"Cập nhật thất bại!"
        })
    }
}