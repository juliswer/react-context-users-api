import {GET_USERS, GET_PROFILE} from '../types';

export default (state, action) => {
    const {payload, type} = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                user: payload
            }
    }

}