const express = require('express')
const path = require("path"); 
const mongoose = require('mongoose');

const app = express(); 
const PORT = process.env.PORT || 3000; 
const apiRoutes = require("./routes/apiRoutes"); 

//Define middleware here
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build")); 
}
//Connect to Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactrecipes",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
); 

//Use apiRoutes
app.use("/api", apiRoutes); 

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  