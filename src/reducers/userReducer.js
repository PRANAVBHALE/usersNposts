import { GET_USER_DATA ,GET_USER_DETAIL} from "../actionContants/userActionConstants"
import { findUser } from "../utils/healpers"


let initialState = {
  users: [],
  userDetail:{}
}

 const userData = (state = initialState, action) => {

  switch (action.type) {
    case GET_USER_DATA:
  
      return {
        ...state,
        users: [...action.payload]
      }

      case GET_USER_DETAIL:
  
        let userDetail = findUser(state.users,action.payload)

        return {
          ...state,
          userDetail: userDetail
        }

    default: return state

  }
}

export default userData