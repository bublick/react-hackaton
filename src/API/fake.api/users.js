const users = [
    {
        _id: '349sdfaf32ui5424d',
        name: 'Джон Дориан',
        age: '21',
        about: 'О себе',
        photo: '',
        social: {
            github: 'http://github.com/username',
            telegram: 'https://t.me/username',
        },
        role: '',
    },
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users)
        }, 2000)
    })

const getUserById = (id) =>
    new Promise((resolve) =>
        setTimeout(() => resolve(users.find((user) => user._id === id)), 1000)
    )

export default {
    fetchAll,
    getUserById,
}
