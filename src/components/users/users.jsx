import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../user/user'
import UserList from '../userList/userList'

const Users = () => {
    const { userId } = useParams()

    return <>{userId ? <User id={userId} /> : <UserList />}</>
}

export default Users
