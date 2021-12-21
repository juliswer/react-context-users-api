import React, {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';

const UserState = (props) => {
    const initialState = {
        user: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    const getUsers = () => {}
    
    const getProfile = () => {}

    return (
        <UserContext.Provider value={{
            user: state.user,
            selectedUser: state.selectedUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;