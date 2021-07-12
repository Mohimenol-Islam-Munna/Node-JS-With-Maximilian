const path = require('path');
const express = require('express');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// create express application 
const app = express();

// body parser 
app.use(express.urlencoded({ extended: true }));

// serve static file 
app.use(express.static(path.join(__dirname, "public")));


// routes 
app.use("/admin", adminRoutes);
app.use(userRoutes);

// server 
const PORT = 3000;
app.listen(PORT, (err) => {
    console.log(`server is running at port ${PORT}...`);
});
