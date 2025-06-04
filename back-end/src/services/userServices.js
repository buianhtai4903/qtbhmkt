exports.register = async ( email, password, full_name) => {
    const user = await prisma.users.fin
    const result = await prisma.users.create({
        data : {
            email: email,
            password: password,
            full_name: full_name
        }
    })
}