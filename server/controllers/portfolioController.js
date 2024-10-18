const sendMailController=(req, res)=>{
    try {
        return res.status(200).send({
            success:true,
            message:"Your msg send successfully",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            messeage:"send Email api error",
            error
        })
    }
}
module.exports = {sendMailController}