const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Booking = require('../models/Booking');

router.post('/', auth, async (req, res) => {
  const { listingId, startDate, endDate } = req.body;

  try {
    const booking = new Booking({
      user: req.user.id,
      listing: listingId,
      startDate,
      endDate
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('listing');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
