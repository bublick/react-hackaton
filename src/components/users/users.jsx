import query from 'query-string'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../API'
import Breadcrumbs from '../breadcrumbs/breadcrumbs'
import User from '../user/user'
import UserList from '../userList/userList'

const Users = ({ crumbs, location }) => {
    const { userId } = useParams()
    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data))
    }, [])

    const getFavsFromLocal = () => {
        const storedNames = JSON.parse(localStorage.favorites)
        return storedNames
    }

    const search = query.parse(location.search)
    let cropUsers = []
    if (search?.favorites === 'true' && users) {
        console.log(getFavsFromLocal())

        const favUsersArr = getFavsFromLocal()

        cropUsers = users.filter((user) => favUsersArr.includes(user._id))
    } else {
        cropUsers = users
    }

    let currentUser = users ? users.find((user) => userId === user._id) : null

    return (
        <>
            {crumbs && (
                <Breadcrumbs
                    crumbs={crumbs}
                    specify={currentUser && currentUser.name}
                />
            )}
            {userId ? <User id={userId} /> : <UserList users={cropUsers} />}
        </>
    )
}

export default Users
