const mongoose=require('mongoose');

const { Schema } = mongoose;

const noteSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  title: {type:String, required:true}, // String is shorthand for {type: String}
  desc: {type:String,default:"No description"},
//   password: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
});
module.exports=mongoose.model('notes',noteSchema);