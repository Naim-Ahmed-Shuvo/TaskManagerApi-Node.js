const express = require("express");
require("./db/mongoose.js");
const userRoutes = require("./routers/UserRouter");
const taskRoutes = require("./routers/TaskRouter");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is up on port:" + port);
});
// console.log(process.env.MONGODB_URL);
// app.use((req, res, next) => {
//   if(req.method === "GET"){
//     res.send('GET request are disable');
//   }else{
//     next();
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently unavailable ! check back soon');
// })

// const multer = require('multer')

// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000
//   },
//   fileFilter(req, file,cb){
//     if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//      return  cb(new Error('Please upload png jpg jpeg format'))
//     }

//     cb(undefined, true);
//   }
// })

// app.post('/upload',upload.single('upload') , (req, res) => {
//   res.send();
// },(error,req,res,next)=>{
//   res.status(400).send({error: error.message});
// })

// const jwt = require("jsonwebtoken");
// const myFnc = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisisnodejscourse", {
//     expiresIn: "0 seconds",
//   });
//   console.log("token", token);

//   const data = jwt.verify(token, "thisisnodejscourse");
//   console.log("data", data);
// };

// myFnc();

//***** relation between user and task model ****//

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//   // const task = await Task.findById('605390abf3254802e899d3f0');
//   // await task.populate('user').execPopulate();
//   // console.log(task.user);

//   const user = await User.findById('60538ec2f3254802e899d3ed');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }

// main()

// ***** //
