const express = require('express');

const router = express.Router();

const students = [

    { id: 1, name: "Alice" },
    
    { id: 2, name: "Bob" },
    
    { id: 3, name: "Charlie" }
    
    ];


router.get('/',(req,res)=>{
    res.send('Welcome to the Student & Course Portal API!');
});

router.get('/students',(req,res)=>{
    res.send(`Students : ${students[0].name} , ${students[1].name} , ${students[2].name}`);
});

router.get('/students/:id',(req,res)=>{
    const studentId = parseInt(req.params.id);
    const student = students.find((s)=>{
        if(s.id === studentId){
            return s;
        }
    });
    if(!student){
       return res.status(404).send('Student not found');
    }

    res.send(`Student : ${student.name}`);
});

module.exports = router;