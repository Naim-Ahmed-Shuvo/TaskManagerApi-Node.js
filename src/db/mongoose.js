const mongoose = require("mongoose");
const validator = require("validator");

// -------- constans //
const db_endPoint = "";

// ---- connecting to db//
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database conneted......");
  }
);

// // ------- defing the schema//
// const Task = mongoose.model("task",{
//     description:{
//       type:String,

//     },
//     completed:{
//         type:Boolean,

//     }
// })

// // ------- creating data instances//
// const myTask = new Task({
//     description:"eat healthy",
//     completed:false,
// })

// // // ------- saving to database //
// myTask.save().then(() => {
//    console.log(myTask);
// }).catch(err =>{
//    console.log(err);
// })

//-- user model --//
// --- define shcema//

// const me = new User({
//   name: "Dela",
//   email:"Dela@example.com",
//   age: 23,
//   password: "123 4567 "
// });

// me.save().then(() => {
//     console.log(me);
// }).catch((err) =>console.log(err));
