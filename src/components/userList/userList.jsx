import React, { useState, useEffect } from 'react'
import api from '../../API'

const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

    return (
        <div className='container'>
            <h1>Users</h1>
            {users
                ? users.map((user) => (
                      <div className='users'>
                          <a href={'/users/' + user._id}>
                              <div className='user__photo'>
                                  <img src={user.photo} />
                              </div>
                              <div className='user-meta__name'>{user.name}</div>
                          </a>
                      </div>
                  ))
                : null}
        </div>
    )
}

export default Users
