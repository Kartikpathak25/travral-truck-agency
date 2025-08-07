const mongoose =require("mongoose");


url="mongodb+srv://Kartikpathak:<Pathak8084>@cluster0.hmvdfla.mongodb.net/"

const connectDB =() =>{
    return mongoose.connect(url ,{
        useNewurlParser:true ,
        useUnifiedTopology : true,
    });
}

module.exports =connectDB;
