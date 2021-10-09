const users = [
    {
        _id: '349sdff32',
        name: 'Джон Дориан',
        age: '21',
        about: 'О себе',
        photo: '',
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
