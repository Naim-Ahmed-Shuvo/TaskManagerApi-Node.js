const express = require("express");
const router = express.Router();
const Task = require("../models/task.js");
const auth = require("../middleware/auth.js");

router.post("/task",auth, async (req, res) => {
  // const task = new Task(req.body);
   const task = new Task({
     ...req.body,
     user: req.user._id,
   })
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error);
  }

  // const task = new Task(req.body);
  // task.save().then(()=>{
  //     res.status(200).send(task);
  // }).catch(err=>{
  //     res.status(400).send(err);
  // })
});

router.get("/task",auth, async (req, res) => {
  const match = {};
  const sort = {};

  if(req.query.completed){
    match.completed =  req.query.completed==='true';
  }

  if(req.query.sortby){
    const parts = req.query.split(':');
    
    sort[parts[0]] = parts[1] === 'desc'? -1:1;
  }
  try {
    // const tasks = await Task.find({});

   await req.user.populate({
     path: 'tasks',
     match,
     options:{
       limit: parseInt(req.query.limit),
       skip: parseInt(req.query.skip),
       sort
     }
   }).execPopulate();
    res.status(200).send(req.user.tasks);
  } catch (err) {
    res.status(500).send(err);
  }

  // Task.find({})
  // .then((result)=>{
  //     res.status(200).send(result)
  // })
  // .catch((err)=>{
  //     res.status(500).send(err);
  // })
});

router.get("/task/:id",auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({_id, user: req.user._id});

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }

  // Task.find({_id:req.params.id})
  // .then((result)=>{
  //     res.status(200).send(result)
  // })
  // .catch((err)=>{
  //     res.status(500).send(err);
  // })
});

router.patch("/task/:id",auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const validUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) => {
    return validUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(404).send({ error: "Invalid inputs" });
  }

  // const _id = req.params.id;

  try {

    // const task = await Task.findById(_id );
     // updates.forEach((update)=>task[update] = req.body[update])
    // const task = await Task.findByIdAndUpdate(_id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    const task = await Task.findOne({_id: req.params.id, user: req.user._id})
    if (!task) {
      return res.status(404).send();
    }

    updates.forEach((update)=>task[update] = req.body[update])
    await task.save();
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/tasks/:id",auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findOneAndDelete({_id: req.params.id, user: req.user._id})
    if (!task) {
      return res.status(404).send();
    }

    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
