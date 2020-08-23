import { GET_DETAILS,CLEAR_DETAILS } from '../../types/index';



const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action){   
    switch (action.type) { 
        case GET_DETAILS :
            return [...state,action.payload]
        case CLEAR_DETAILS :
            return state = INITIAL_STATE
        default:
            return state
    }
}