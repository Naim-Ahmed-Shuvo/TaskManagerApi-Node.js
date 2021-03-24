const mongoose = require('mongoose');
const validator = require("validator");

const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
},{
    timestamps:true
})
const Task = mongoose.model('task',taskSchema)

// const task = new Task({
//     description:"hello1",
//     completed: true
// })
// task.save().then((task)=>{
//     console.log(task)
// }).catch((err)=>{
//     console.log(err)
// })
taskSchema.pre('save', async function(next){
    const task = this;
    if(task.isModified('password')){
        task.password = await bcrypt.hash(task.password,8)
    }
    next();
 })
module.exports = Task