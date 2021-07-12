const express = require('express');

const userRoutes = express.Router();

// User Routes 
userRoutes.get('/about', (req, res, next) => {
    res.send("<h2>Express Application About Page</h2>");
})

userRoutes.get('/', (req, res, next) => {
    res.send("<h2>Express Application Home Page</h2>");
})

module.exports = userRoutes
