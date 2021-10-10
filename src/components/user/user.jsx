import { array } from 'prop-types'
import React, { useEffect, useState } from 'react'
import { fav, unFav } from '../../utils/icons'
import api from '../../API'

const User = ({ id }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getUserById(id).then((data) => setUser(data))
    }, [])

    const handleSaveToLocal = (id) => {
        let storedNames = []

        if (localStorage.favorites) {
            storedNames = JSON.parse(localStorage.favorites)
        }

        if (!storedNames) {
            storedNames = []
        }

        if (storedNames.includes(id)) {
            storedNames = storedNames.filter((storedName) => storedName !== id)
            localStorage.setItem('favorites', JSON.stringify(storedNames))
        } else {
            storedNames.push(id)
            storedNames = Array.from(new Set(storedNames))
        }

        localStorage.setItem('favorites', JSON.stringify(storedNames))
    }

    const userIsFavorite = (id) => {
        if (localStorage.favorites) {
            let storedNames = JSON.parse(localStorage.favorites)

            if (storedNames.includes(id)) {
                return true
            }
        }
    }

    return (
        <div className='container'>
            {user && (
                <div className='single-user single-user__row'>
                    <div className='single-user__photo-wrapper'>
                        <img
                            className='single-user__photo-wrapper'
                            alt=''
                            src={user.photo}
                        />
                    </div>

                    <div className='single-user__meta'>
                        <h1 className='single-user__meta-name'>{user.name}</h1>
                        <div className='single-user__meta-age'>
                            <span className='single-user__meta-label'>
                                Возраст:
                            </span>
                            {user.age}
                        </div>
                        <div className='single-user__meta-about'>
                            <span className='single-user__meta-label'>
                                О себе:
                            </span>
                            {user.about}
                        </div>

                        <div className='single-user__meta-socials'>
                            <span className='single-user__meta-label'>
                                Социальные сети:
                            </span>
                            <ul className='meta-social__list'>
                                {Object.keys(user.social).map((s) => (
                                    <div
                                        key={s}
                                        className={
                                            'meta-social__list-item social-' + s
                                        }
                                    >
                                        <a href={user.social[s]}></a>
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div className='single-user__meta-role'>
                            <span className='single-user__meta-label'>
                                Роль:
                            </span>
                            {user.role.name}
                        </div>

                        <button onClick={() => handleSaveToLocal(user._id)}>
                            {userIsFavorite(user._id)
                                ? 'Удалить из избранного'
                                : 'Добавить в избранное'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default User
