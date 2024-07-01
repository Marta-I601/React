const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User'); //postoji mogucnost da ovde mozda ne trema bodels ali neka ga
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase');

app.post('/login', (req, res)=> {
  const {email, password} = req.body;
  UserModel.findOne({email: email})
  .then (user => {
    if (user) {
      if (user.password === password){
        res.json("Uspesno ste se ulogovali!")
      } else {
        res.json("Sifra nije dobra! Proveri je i probaj opet!")
      }
    } else {
      res.json("Korisnik ne postoji")
    }
  })
})

app.post('/register', (req, res)=> {
  UserModel.create(req.body)
  .then(User => res.json(User))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running")
})
  


/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {  });

app.post(
  '/register',
  [
    check('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.json({ success: true, message: 'Registration successful!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Registration failed.' });
    }
  }
);

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ success: true, message: 'Login successful!', token });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/