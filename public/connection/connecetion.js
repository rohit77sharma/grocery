const express = require('express');
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://MealMonkey:Meal123456789@mealmonkeyc.eo3r5.mongodb.net/Mealmonkey?retryWrites=true&w=majority" ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false,
}).then(()=>{
    console.log('connection created')
}).catch(()=>{
    console.log(err);
});
