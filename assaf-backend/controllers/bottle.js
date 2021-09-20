
exports.bottle = (req, res) => {

    var Message = require("./MessageModel.js");
    const mongooes = require("mongoose");
    mongooes.connect("mongodb://localhost:27017/assafDB", { useNewUrlParser: true });


    let messagesArr = [];

    ////////////////////// to create masseges in the DB ///////////////////
    // const message = new Message({
    //     message: "Stop playing and go eat sabih"
    // });
    // const message = new Message({
    //     message: "You're a pirate walking on water, does that make you a pirate-Jesus?"
    // });
    // const message = new Message({
    //     message: "Why you read a message from a bottle is better for you to drink rum you are in the ocean"
    // });
    // message.save();
    //////////////////////////////////////////////////////////////////////////

    Message.find((err, messages) => {
        if (err) {
            console.log(err);
        } else {
            let i = 0;
            messages.forEach((message) => {
                messagesArr[i++] = message.message;
            })

            res.json({
                "randomMessage": messagesArr[Math.floor(Math.random() * messagesArr.length)]
            })
            mongooes.connection.close();
        }
    })



};