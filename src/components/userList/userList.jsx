import React, { useState, useEffect } from 'react'
import api from '../../API'

const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

    return (
        <div className='container'>
            <h1>Команда</h1>
            <div className='users-list'>
                {users
                    ? users.map((user) => (
                          <a
                              class='users-list__user'
                              href={'/users/' + user._id}
                          >
                              <div className='user-list__photo-wrapper'>
                                  <img
                                      className='user-list__photo-img'
                                      src={user.photo}
                                  />
                              </div>
                              <div className='user-list__name'>{user.name}</div>
                          </a>
                      ))
                    : null}
            </div>
        </div>
    )
}

export default Users
