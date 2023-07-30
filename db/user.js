const { v4: uuid } = require('uuid');

const users = {
    data: [
        {
            id: uuid(),
            email: 'p@gmail.com',
            password: "12345",
            number: '9876543210',
            name: 'Prakash Sakari'
        },
        {
            id: uuid(),
            email: 'a@gmail.com',
            password: "123456",
            number: '9876543211',
            name: 'Ashish Jangra'
        },
        {
            id: uuid(),
            email: 'v@gmail.com',
            password: "123457",
            number: '9876543212',
            name: 'Vimal John'
        },
    ]
}

module.exports = users;