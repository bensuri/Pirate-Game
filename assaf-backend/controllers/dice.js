exports.dice = (req, res) => {
    res.json({
        "diceNumber": Math.floor(6 * Math.random()) + 1
    })
};
