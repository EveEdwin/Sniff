const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Get all services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add a new service
router.post('/services', async (req, res) => {
  const { title, description, route } = req.body;

  try {
    const newService = new Service({ title, description, route });
    await newService.save();
    res.json(newService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a service
router.put('/services/:id', async (req, res) => {
  const { title, description, route } = req.body;
  
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { title, description, route },
      { new: true }
    );
    res.json(updatedService);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a service
router.delete('/services/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
