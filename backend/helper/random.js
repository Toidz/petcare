module.exports.RandomNumber = (length)=>{
    const data = "0123456789";
    let result ="";
    for(let i=0;i<length;i++)
    {
        result += data.charAt(Math.floor(Math.random()*data.length))
    }
    return result;
}