const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./event.controller');
const passport = require('passport');
const router = express.Router();

router.use(bodyParser.json());

// GET ALL EVENTS FROM USER 
router.get(
  '/',  // should this be more specific? 
  passport.authenticate('jwt', { session: false }),
  controller.findExistingEvents
);

// GET ALL ACTIVE EVENTS FROM USER
router.get(
  '/active',
  passport.authenticate('jwt', { session: false }),
  controller.findActiveEvents
);

// GET ALL PAST EVENTS FROM USER
router.get(
  '/past',
  passport.authenticate('jwt', { session: false }),
  controller.findPastEvents
);

// GET ALL ARCHIVED EVENTS FROM USER
router.get(
  '/archived',
  passport.authenticate('jwt', { session: false }),
  controller.findArchivedEvents
);

// CREATE NEW EVENT
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  controller.createNewEvent
);

// MODIFY EXISTING EVENT
router.put(
  '/:eventId',
  passport.authenticate('jwt', { session: false }),
  controller.modifyEventDetails
);

// PUT - send an array of guest objects
// first last name email
// array of 3 properties
// save onto the event property
module.exports = router; 