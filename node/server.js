 const express = require('express');
 const cors = require('cors')
 const app = express();

app.use(cors())

 app.get('/api/users', (req, res) => {
   res.json({
    users:[
        {
            name :"Mithun",
            age : 25,
            email : "mithun@example.com"
        },
        {
            name :"Pandiyan",
            age : 63,
            email : "pandiyan@example.com"
        },
    ],
   });
 });

 app.listen(8080,()=>{
    console.log("server is running on port 8080")
 })

 
 