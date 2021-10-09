const users = [
    {
        _id: '349sdfaf32ui5424d',
        name: 'Джон Дориан',
        age: '21',
        about: 'Молодой врач, к началу сериала только что окончивший медицинский колледж и пришедший в клинику «Sacred Heart» как стажёр. Склонный к фантазированию, открытый для мира, приятный молодой человек. Несмотря на свой статус врача, Джей Ди часто ведёт себя как ребёнок. По ходу развития сюжета становится ординатором, заместителем старшего ординатора, старшим ординатором, штатным врачом, старшим лечащим врачом. В 1-8 сезонах сериала от его лица ведётся повествование. В 9 сезоне — преподаватель медицинского колледжа — главного места событий сезона.',
        photo: 'https://sites.google.com/site/serialklinika/_/rsrc/1368383579164/akterskij-sostav/zak-braff-dzej-di/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%B5%D1%80%D0%B8%D0%B0.jpg',
        social: {
            github: 'http://github.com/username',
            telegram: 'https://t.me/username',
        },
        role: 'Интерн',
        technologies: { css: '80' },
    },

    {
        _id: '3493dfafa2ugfi454d',
        name: 'Клон Джона Дориана',
        age: '22',
        about: 'Молодой врач, к началу сериала только что окончивший медицинский колледж и пришедший в клинику «Sacred Heart» как стажёр. Склонный к фантазированию, открытый для мира, приятный молодой человек. Несмотря на свой статус врача, Джей Ди часто ведёт себя как ребёнок. По ходу развития сюжета становится ординатором, заместителем старшего ординатора, старшим ординатором, штатным врачом, старшим лечащим врачом. В 1-8 сезонах сериала от его лица ведётся повествование. В 9 сезоне — преподаватель медицинского колледжа — главного места событий сезона.',
        photo: 'https://sites.google.com/site/serialklinika/_/rsrc/1368383579164/akterskij-sostav/zak-braff-dzej-di/%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%81%D0%B5%D1%80%D0%B8%D0%B0.jpg',
        social: {
            github: 'http://github.com/username',
            telegram: 'https://t.me/username',
        },
        role: 'Интерн',
        technologies: { css: '20', js: '40' },
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

const fetchAllTechs = () => {}

const fetchAllPhotos = () => {}

export default {
    fetchAll,
    getUserById,
}
