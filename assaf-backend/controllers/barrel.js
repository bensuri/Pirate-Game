exports.barrel = (req, res) => {
    res.json({
        "barrelRum": Math.random() < 0.5
    })
};