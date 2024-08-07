const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password,age } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists with given credentials' });
    }
    user = new User({ username, email, password ,age});
    const result = await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed to create user');
  }
});

router.post('/login', async (req, res,err) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res.status(400).json({ msg: 'No user found' });
    }
    const isMatch = password===user.password
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid UserName or Password' });
    }
    const display={
      name:user.username,
      email:user.email,
      age:user.age
    }
    res.json(display);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
