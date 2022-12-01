const Event = require('../models/eventModel');

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.json({
        status: 'success',
        length: events.length,
        data: events
    });
};

exports.getEventById = async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json({
        status: "success",
        length: event.length,
        data: event,
    });

};

exports.createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.json({
    status: "success",
    data: event,
  });
};

exports.updateEvent = async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    });

    if (!event) {
        console.log("can't find event with id");
    }
    
    res.json({
        status: "success",
        data: {
            event
        }
    });
};


exports.deleteEvent = async (req, res) => {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
        console.log("can't find event with id");
    }

    res.json({
        status: "success",
        data: null,
    });
};


