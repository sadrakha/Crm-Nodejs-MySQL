exports.err=(msg,status)=>{
    res.status(status).send(msg)
    console.log(msg);
    next()
}