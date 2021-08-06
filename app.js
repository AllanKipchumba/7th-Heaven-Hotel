const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ******************* create mongodb connection *****************************

mongoose.connect("mongodb://localhost:27017/HotelDB", {useNewUrlParser: true, useUnifiedTopology: true})

const roomSchema = {
        firstName: String,
        lastName: String,
        email: String,
        telephone: Number,
        adults: Number,
        children: Number,
        checkInDate: Date,
        CheckOutDate: Date,
        pet: Boolean,
        pickMeUp: Boolean,
        clientInformation: String
    }
   
const Room = mongoose.model("room", roomSchema);

const subscribersSchema = {
    firstName: String,
    lastName: String,
    email: String
}
const Subscriber = mongoose.model("subscriber", subscribersSchema);

// ***********************************************************************

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/book-room", (req, res) => {
    res.render("bookRoom");
})

app.post("/bookRoom", (req, res) => {
    const room = new Room({
        firstName: _.upperFirst(_.toLower(req.body.firstName)),
        lastName: _.upperFirst(_.toLower(req.body.lastName)),
        email: req.body.guestEmail,
        telephone: req.body.guestTelephone,
        adults: req.body.adults,
        children: req.body.children,
        checkInDate: req.body.checkin,
        CheckOutDate: req.body.checkout,
        pet: req.body.switch1 ? true : false,
        pickMeUp: req.body.switch2 ? true : false,
        clientInformation: req.body.comment
    });
    room.save((err) => {
        if (err) {
            console.log(err)
        } else {
            res.render("success")
        }
    });

});

app.post("/newsletter", (req, res) => {
    const subscriber = new Subscriber({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    subscriber.save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.render("subscribed")
        }
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000")
})