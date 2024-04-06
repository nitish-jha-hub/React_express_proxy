// import express, dbconnection, bodyparser, usermodal
import express from 'express'; // ES6 //not working in node.js which is not supporting ES6 syntax
// const express = require('express'); // ES5
import bodyParser from 'body-parser';
import db_connect from './db_connect/db_connection.js';
import {User} from './db_modals/user.models.js';

// defalult library actions
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    db_connect();
    const alluser = await User.find();
    console.log(alluser);
    res.send('Hello World! from api/index file' + JSON.stringify(alluser));
});

app.post('/', async (req, res) => {
    await db_connect();
    console.log(req.body, typeof (req.body));
    const a = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password});
        try {
            await a.save();
            res.send(`Got a POST request at / on api/index file with data = ${JSON.stringify(req.body)} + saved` );
            console.log('Data saved successfully');
        } catch (error) {
            res.send(`Got a POST request at / on api/index file with data = ${JSON.stringify(req.body)} not saved bcs of error:  ${error}` );
            console.log('Error in saving data' + error);
    }
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);


// Notes:
    // user.save((err, user) => {
    //     if(err) {
    //         return res.status(400).json({
    //             err: "NOT able to save user in DB"
    //         });
    //     }
    //     res.json({
    //         name: user.name,
    //         email: user.email,
    //         id: user._id
    //     });
    // });
