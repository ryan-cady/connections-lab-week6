// get express module loaded into the program
let express = require('express');

// create object that uses express library
// app is the main object we will be working with server side
let app = express();

let everyNumber = {
    "data": [
        {
            name: "one",
            info: "this is the number 1"
        },
        {
            name: "two",
            info: "this is the number 2"
        },
        {
            name: "three",
            info: "this is number 3"
        }
    ]
}

// static routes for index.html, about.html, projects.html
app.use('/', express.static('public'));

//dynamic routes for every number
app.get('/every-number', (req, res) => {
    res.json(everyNumber);
});

// route to get number by name
app.get('/every-number/:number', (req, res) => {
    let userNumber = req.params.number
    let userObj = everyNumber.data.find(number => number.name === userNumber);

    if (userObj) {
        res.json(userObj);
    } else {
        res.json({ status: "no info available" });
    }
});

// where the server is available
app.listen(3000, () => {
    console.log("The app is listening at localhost:3000");
})
