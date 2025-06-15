const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Listing = require('../models/Listing');

// POST /api/listings - Create a new listing
router.post('/listings', auth, async (req, res) => {
  try {
    const { title, description, price, location } = req.body;

    const newListing = new Listing({
      title,
      description,
      price,
      location,
      owner: req.user.id, // From JWT middleware
    });

    const savedListing = await newListing.save();

    res.status(201).json(savedListing); // This will include _id and timestamps
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

// GET all listings
router.get('/listings', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ message: 'Server error' });
  }
});