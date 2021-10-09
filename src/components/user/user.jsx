import React, { useState, useEffect } from 'react'
import api from '../../API'

const User = ({ id }) => {
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getUserById(id).then((data) => setUser(data))
    }, [])

    const handleSaveToLocal = (id) => {
        localStorage.setItem('favorites', id)
    }

    return (
        <div className='container'>
            <h1>User</h1>

            {user && (
                <div className=''>
                    <div className='user__photo'>
                        <img src={user.photo} />
                    </div>

                    <div className='user-meta'>
                        <div className='user-meta__name'>{user.name}</div>
                        <div className='user-meta__age'>{user.age}</div>
                        <div className='user-meta__about'>{user.about}</div>

                        <div className='user-meta__socials'>
                            {Object.keys(user.social).map((s) => (
                                <div
                                    className={
                                        'user-meta__social user-meta__social-' +
                                        s
                                    }
                                >
                                    <a href={user.social[s]}>
                                        {user.social[s]}
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className='user-meta__role'>{user.role}</div>
                    </div>

                    <button onClick={() => handleSaveToLocal(user._id)}>
                        Fav
                    </button>
                </div>
            )}
        </div>
    )
}

export default User
