const userService = require('../services/userServices');
exports.register = async (req, res) => {
    const { email, password, full_name } = req.body;
    const result = await userService.register(email, password, full_name);
    if (result) {
        return res.status(201).json({
            result
        })
    }
    else {
        return res.status(400).json({
            result
        })
    }
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const result = await userService.login(email, password);
    if (!result) {
        return res.status(400).json({
            result
        })
    }
    else {
        return res.status(200).json({
            result
        })
    }
}
