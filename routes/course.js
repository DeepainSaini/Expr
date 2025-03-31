const express = require('express');

const router = express.Router();

const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
    
    ];

router.get('/courses',(req,res)=>{
        res.send('Courses : Frontend, Backend');
    });
    
router.get('/courses/:id',(req,res)=>{
        const courseId = parseInt(req.params.id);
        const course = courses.find((c)=>{
            if(c.id === courseId){
                return c;
            }
        });
        if(!course){
           return res.status(404).send('Course not found');
        }
    
        res.send(`Course : ${course.name}, ${course.description}`);
    });
    
    module.exports = router;