import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext';

const Profile = () => {

    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {
                selectedUser ? (
                    <div></div>
                ) : (
                    <h1>No User Selected</h1>
                )
            }
        </>
    )
}

export default Profile
