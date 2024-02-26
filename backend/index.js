const express = require('express');
const app = express();
const { DBConnection } = require('./database/db.js');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 8080;
DBConnection();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/register', async (req, res) => {
    try {
        //get all the data from the frontend
        const { firstname, lastname, email, password } = req.body;

        //check that all the data exists
        if (!firstname || !lastname || !email || !password)
            return res.status(400).send('Please enter all the information.')

        //check if the user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser)
            return res.status(200).send('User already exists.')

        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //save the user in the database
        const user = await User.create({ firstname, lastname, email, password: hashedPassword });

        //generate the token for the user and send it
        const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        user.token = token;
        res.status(200).json({
            message: 'You have succesfully registered!',
            user
        });
    } catch (error) {
        console.log(error.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).send('Please enter all the information.')

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).send('User does not exist.');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).send('Invalid credentials.');

        const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        user.token = token;
        res.status(200).json({
            message: 'You have succesfully logged in!',
            user
        });
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});