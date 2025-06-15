const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Properties route working');
});

module.exports = router;