const express = require("express");
const router = express.Router();

const userRoutes = require('./userRoutes');
const itemRoutes = require('./itemRoutes');
const categoryRoutes = require('./categoryRoutes');
const authRoutes = require('./authRoutes')


router.use('/items', itemRoutes); 
router.use('/users', userRoutes); 
router.use('/categories', categoryRoutes);
router.use('/auth', authRoutes)



module.exports = router;
