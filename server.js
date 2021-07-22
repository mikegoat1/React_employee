const express = require('express'); 


const mongoose = require('mongoose');
const routes = require("./routes"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 



//Define middleware here
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build")); 
}
//Connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/employeeDB",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
); 

//Add routes, both API and View
app.use(routes); 

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  