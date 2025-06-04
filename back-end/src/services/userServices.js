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

    const result = await prisma.users.create({
        data: {
            email: email,
            password: password,
            full_name: full_name
        }
    })

    return result;
}