const bcrypt = require('bcryptjs');
const prisma = require('../../prisma/client');
exports.register = async (email, password, full_name) => {
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    })

    if (user) {
        console.log('User already exists');
        return {
            EC: -1,
            message: 'Tài khoản đã tồn tại',
            data: null
        }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.users.create({
        data: {
            email: email,
            password: hashedPassword,
            full_name: full_name
        }
    })

    if (result)
        return {
            EC: 0,
            message: 'tạo tài khoản thành công',
            data: null
        };
    else {
        return {
            EC: -1,
            message: 'tạo tài khoản thất bại',
            data: null
        }
    }
}

exports.login = async (email, password) => {
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    })
    if (!user) {
        console.log('khong tim thay user');
        return {
            EC: -1,
            message: 'tai khoan khong ton tai',
            data: null
        };
    }
    else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            console.log('Dang nhap thanh cong');
            return {
                EC: 0,
                message: 'Dang nhap thanh cong',
                data: {
                    username: user.full_name,
                    usermail: user.email
                }
            };
        }
        else {
            console.log('Mat khau khong dung');
            return {
                EC: -1,
                message: 'mat khau khong dung',
                data: null
            };
        }
    }
}