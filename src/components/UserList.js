import React, {useEffect, useContext} from 'react'
import UserContext from '../context/User/UserContext';

const UserList = () => {

    const {getUsers, getProfile} = useContext(UserContext)

    useEffect(() => {
        getUsers()
        getProfile(1)
    }, [])

    return (
        <div>
            User list
        </div>
    )
}

export default UserList
