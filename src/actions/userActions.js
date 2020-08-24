import { GET_USER_DATA, GET_USER_DETAIL } from "../actionContants/userActionConstants"
import { fetchUserList } from '../Apis/apis.js'


const  setUser = (users) => {
  return {
    type: GET_USER_DATA,
    payload: users
  };
}

export  const getUserList = () =>  {

  return async (dispatch) => {

    const users  = await fetchUserList()
    dispatch(setUser(users))
  }
}

export const getUserDetail = (id) => {

  return {
    type: GET_USER_DETAIL,
    payload: id
  }
}