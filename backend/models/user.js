const mongoose=require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
   // String is shorthand for {type: String}
  email: {type:String,required:true,unique:true},
  password: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
});
const User=mongoose.model('user',userSchema);
module.exports=User;