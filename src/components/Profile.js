import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext';

const Profile = () => {

    const { selectedUser } = useContext(UserContext);

    return (
        <>
            {
                selectedUser ? (
                    <div>
                        <img src={selectedUser.avatar} />
                        <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
                        <h3>{`${selectedUser.email}`}</h3>
                    </div>
                ) : (
                    <h1>No User Selected</h1>
                )
            }
        </>
    )
}

export default Profile
