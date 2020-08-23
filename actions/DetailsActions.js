import { GET_DETAILS,CLEAR_DETAILS } from '../types/index';


// export function getDetails(details){
//     return (dispatch) => {
//         dispatch(getDetailActions(details))
//     }
// }



export const getDetailActions = details => ({type:GET_DETAILS, payload:details})
export const clearDetailActions = () => ({ type:CLEAR_DETAILS, payload:null })
