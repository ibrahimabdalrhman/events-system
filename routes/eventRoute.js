const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');


router.get('/',eventController.getEvents);
router.post('/',eventController.createEvent);
router.get('/:id',eventController.getEventById);
router.patch('/:id',eventController.updateEvent);
router.delete('/:id',eventController.deleteEvent);


module.exports = router;