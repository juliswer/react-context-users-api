import React, {useEffect, useContext} from 'react'
import UserContext from '../context/User/UserContext';

const UserList = () => {

    const {users, getUsers} = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <div className="list-group h-100">
                {
                    users.map(user => (
                        <a key={user.id}>{`${user.first_name} ${user.last_name}`}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList
