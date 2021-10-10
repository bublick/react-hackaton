const role = {
    teamlead: {
        _id: '14fd67rfjdc7f6fgeed471198',
        name: 'Тимлид',
        color: 'primary',
    },

    developer: {
        _id: '14fd67rfjgdc7f6fg35ed7h8',
        name: 'Разработчик',
        color: 'developer',
    },
}

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
        role: role.teamlead,
        technologies: { css: '80' },
    },

    {
        _id: '319sdfaf32ui5424d',
        name: 'Артем Рахимов',
        age: '34',
        about: 'Меня зовут Артем. Я junior frontend разработчик. Сейчас изучаю JavaScript, React и NodeJS на курсах от Владилена Минина. До этого прошел курсы по верстке от HTML Academy. Хочу получить новую профессию и стать классным специалистом.',
        photo: 'https://lis.im/react-hackaton/asd.jpg',
        social: {
            github: 'https://github.com/arakhimov',
            telegram: 'https://t.me/@artemRakhimov',
        },
        role: role.developer,
        technologies: {
            HTML: '80',
            CSS: '80',
            JS: '60',
            React: '30',
            Git: '50',
            WebPack: '40',
        },
    },

    {
        _id: '910bbddd-91f4-4db8-ac97-7321538ab768',
        name: 'Александр Лоскутов',
        age: '32',
        about: 'Меня зовут Александр. Вебмастер и SEO специалист middle уровня. Заканчиваю обучение по JavaScript, React и NodeJS на курсах от Владилена Минина. Параллельно прохожу интенсив по верстке от HTML Academy. Хобби: gamedev, фотография. Хочу работать в IT-стартапах.',
        photo: 'https://lis.im/react-hackaton/alexander.jpg',
        social: {
            github: 'https://github.com/aleksandr-loskutov',
            telegram: 'https://t.me/@Lcantstop',
        },
        role: role.developer,
        technologies: {
            HTML: '70',
            CSS: '50',
            JS: '70',
            React: '50',
            Git: '50',
            WebPack: '35',
            CSharp: '60',
        },
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
