const express = require("express");
const router = express.Router();
const Lifecoach = require("../../models/lifecoach.js");
const notifier = require('node-notifier');
const validator = require("../../validations/lifecoachValidations.js");
var open = require('open');
// Get all life coaches
router.get("/", async (req, res) => {
  const lifecoachs = await Lifecoach.find();
  res.json({ data: lifecoachs });
});

router.get('/notification/:id', async (req, res) => {
  const id = req.params.id
  const lifecoach = await Lifecoach.findById(id)
  if(!lifecoach) return res.status(404).send({error: 'Lifecoach does not exist'})
  const noti= lifecoach.notification
  res.json({ data:noti})

});
// Get a certain lifecoach
router.get('/:id',async (req, res) => {

  const lifecoachID = req.params.id
   const lifecoach1 = await Lifecoach.findById(lifecoachID)
   if(!lifecoach1) return res.status(404).send({error:result.error.details[0].message})
   res.send(lifecoach1)

   notifier.notify({
    'title': 'Alert',
    'message': 'You Have A New Notification!',
    'wait': true
    
  }
  ,function() {
open("http://localhost:3000/api/lifecoach/notification/"+lifecoachID);
  });   
})
// Create a new lifecoach
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newlifecoach = await Lifecoach.create(req.body);
    res.json({
      msg: "life coach was created successfully",
      data: newlifecoach
    });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
// Update a lifecoach
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lifecoach = await Lifecoach.find({id});
    if (!lifecoach) return res.status(404).send({ error: "lifecoach does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    
    const updatedLifecoach = await Lifecoach.findOneAndUpdate({_id: id} , req.body);
    res.json({ msg: "Lifecoach updated successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
// delete a certain lifecoach
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedLifecoach = await Lifecoach.findByIdAndDelete(id);
   
   res.json({msg:'Lifecoach was deleted successfully', data: deletedLifecoach})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
});

module.exports = router;