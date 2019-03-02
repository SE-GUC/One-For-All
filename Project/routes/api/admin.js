const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Admin = require('../../models/Admin');
const Task = require('../../models/Task')
const tasks = [
    new Task ('10:00', 'high', 3, 'senior' ,'google',4000,'wuzzuf',['active','focused'])
     ,new Task ('11:00', 'low', 2, 'junior' ,'yahoo',5000,'otlob',['old','focused'] )
     ,new Task ('9:00', 'medium', 1, 'senior' ,'nike',2000,'wuzzuf',['active','focused','humble'] )
     ,new Task ('20:00', 'high', 3, 'junior' ,'guc',6000,'sh5al',['humble','focused'] )
     ,new Task ('22:00', 'low', 1, 'senior' ,'apple',9000,'wuzzuf',['active','productive'] )]

// temporary data created as if it was pulled out of the database ...
const admins = [
	new Admin('Barney', 30),
	new Admin('Lilly', 27),
	new Admin('Ted', 29),
	new Admin('Marshal', 27),
	new Admin('Robin', 28)
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all A
router.get('/', (req, res) => res.json({ data: admins }));

//post a task
router.post('/',(req,res)=>{
    const time = req.body.time
    const effort=req.body.effort
    const level_of_commitment = req.body.level_of_commitment
    const the_experience_level =req.body.the_experience_level
    const partner_who_owns_it = req.body.partner_who_owns_it
    const monetary_compensation =req.body.monetary_compensation
    const consultancy_assigned_to_it =req.body.consultancy_assigned_to_it
    const set_of_skills =req.body.set_of_skills

    if (!time) return res.status(400).send({ err: 'time field is required' });
    if (typeof time !== 'string') return res.status(400).send({ err: 'Invalid value for time' });
    
	if (!effort) return res.status(400).send({ err: 'Age field is required' });
    if (typeof effort !== 'string') return res.status(400).send({ err: 'Invalid value for effort' });

    if (!level_of_commitment) return res.status(400).send({ err: 'level_of_commitment field is required' });
    if (typeof level_of_commitment !== 'number') return res.status(400).send({ err: 'Invalid value for level_of_commitment ' });

	if (!the_experience_level) return res.status(400).send({ err: 'the_experience_level field is required' });
    if (typeof the_experience_level !== 'string') return res.status(400).send({ err: 'Invalid value for the_experience_level' });

	if (!partner_who_owns_it) return res.status(400).send({ err: 'partner_who_owns_it field is required' });
	if (typeof partner_who_owns_it !== 'string') return res.status(400).send({ err: 'Invalid value for partner_who_owns_it' });

	if (!monetary_compensation) return res.status(400).send({ err: 'monetary_compensation field is required' });
    if (typeof monetary_compensation !== 'number') return res.status(400).send({ err: 'Invalid value for monetary_compensation' });

    if (!consultancy_assigned_to_it) return res.status(400).send({ err: 'consultancy_assigned_to_it field is required' });
    if (typeof consultancy_assigned_to_it !== 'string') return res.status(400).send({ err: 'Invalid value for consultancy_assigned_to_it' });

    if (!set_of_skills) return res.status(400).send({ err: 'set_of_skills field is required' });
    if (typeof set_of_skills !== 'string') return res.status(400).send({ err: 'Invalid value for set_of_skills' });
    
    const newTask = {
		time,
        effort,
        level_of_commitment,
        the_experience_level,
        partner_who_owns_it,
        monetary_compensation,
        consultancy_assigned_to_it,
        set_of_skills,
	
    };
    
    tasks[tasks.length] = newTask;
	return res.json({ data: tasks });

});

router.post('/joi', (req, res) => {
	const time = req.body.time
    const effort=req.body.effort
    const level_of_commitment = req.body.level_of_commitment
    const the_experience_level =req.body.the_experience_level
    const partner_who_owns_it = req.body.partner_who_owns_it
    const monetary_compensation =req.body.monetary_compensation
    const consultancy_assigned_to_it =req.body.consultancy_assigned_to_it
    const set_of_skills =req.body.set_of_skills

	const schema = {
		time: Joi.string().min(3).required(),
        effort: Joi.string().min(3).required(),
        level_of_commitment: Joi.number().required(),
        the_experience_level: Joi.string().min(3).required(),
        partner_who_owns_it: Joi.string().min(3).required(),
        monetary_compensation: Joi.number().required(),
        consultancy_assigned_to_it: Joi.string().min(3).required(),
        set_of_skills: Joi.string().min(3).required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newTask = {
		time,
        effort,
        level_of_commitment,
        the_experience_level,
        partner_who_owns_it,
        monetary_compensation,
        consultancy_assigned_to_it,
        set_of_skills,
	
	};
	return res.json({ data: newTask });
});
//Choose the candidate 
router.post('/chooseCandidate', (req, res) => {
    const name = req.body.name;
    const taskNumber = req.body.taskNumber;

    if (!name) return res.status(400).send({ err: 'Name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    if (!taskNumber) return res.status(400).send({ err: 'taskNumber field is required' });
    if (typeof taskNumber !== 'number') return res.status(400).send({ err: 'Invalid value for taskNumber' });
    if (taskNumber > tasks.length) return res.status(400).send({err: 'taskNumber value cannot be more than '+tasks.length});

    tasks[taskNumber-1].Candidate = name;
    return res.json({ data: tasks });
});
// Delete a task
router.delete('/api/admin/:id', (req, res) => {
    const taskid = req.params.id 
    const task = tasks.find(task => task.id == taskid)
    const index = tasks.indexOf(task)
    tasks.splice(index,1)
    res.send(tasks)
})

module.exports = router;