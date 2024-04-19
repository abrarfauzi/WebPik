import bcrypt from "bcryptjs";

const users = [
    {
        firstName: 'Admin',
        lastName: 'Doe',
        email: 'Admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582352,
        isAdmin: true,
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582353,
        isAdmin: false,
    },
    {
        firstName: 'Jany',
        lastName: 'Doe',
        email: 'jany@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        phoneNumber: 554582354,
        isAdmin: false,
    },
];

export default users;