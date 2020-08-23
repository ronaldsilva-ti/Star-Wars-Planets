import { GET_DETAILS,CLEAR_DETAILS } from '../types/index';



export const getDetailActions = details => ({type:GET_DETAILS, payload:details})
export const clearDetailActions = () => ({ type:CLEAR_DETAILS, payload:null })
