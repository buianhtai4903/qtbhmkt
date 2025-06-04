const userService = require('../services/userServices');
exports.register = async (req, res) => {
    const { email, password, full_name } = req.body;
    const result = await userService.register(email, password, full_name);
    if (result) {
        return res.status(201).json({
            message: 'Tao tai khoan thanh cong',
            data: result
        })
    }
    else {
        return res.status(400).json({
            message: 'Tao tai khoan that bai',
            data: null
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
