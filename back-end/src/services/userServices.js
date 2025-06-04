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
        return null;
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

    return result;
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
            message: 'tai khoan khong ton tai',
            data: null
        };
    }
    else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            console.log('Dang nhap thanh cong');
            return {
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
                message: 'mat khau khong dung',
                data: null
            };
        }
    }
}