const path = require('path');
const express = require('express');
const rootDir = require('../utill/path')

const adminRoutes = express.Router();

// /admin/add-product/form => GET
adminRoutes.get('/add-product/form', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
})

// /admin/add-product =>POST
adminRoutes.post('/add-product', (req, res, next) => {
    // one way 
    // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    // another way 
    res.sendFile(path.join(rootDir, "views", "shop.html"))
})

module.exports = adminRoutes;
