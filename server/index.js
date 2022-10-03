//define and create express app
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


//define constant for the port where server is responding
const port = 3001;

//define routes which are handled by the servers
app.get("/",(req,res)=>{
    // return 200 status (ok) on JSON
    res.status(200).json({message: "Node server is responding"})
})

// start server and print out message to the console
// pay attention to commas!
app.listen(port,() =>{
console.log(`Server is running on port ${port}`)
})