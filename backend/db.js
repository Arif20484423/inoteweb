const mongoose= require('mongoose')

mongoURI="mongodb+srv://Arif2048:Arif20484423@cluster0.4etohll.mongodb.net/inoteweb?retryWrites=true&w=majority";

const connectToMongo=()=>{
    console.log("trying to connect")
    mongoose.connect(mongoURI,{family:4}).then(db=>console.log("DB is Connected")).catch(err=>console.log(err))
}
module.exports=connectToMongo;