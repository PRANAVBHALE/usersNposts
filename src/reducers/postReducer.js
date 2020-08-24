import { GET_POST_DATA, GET_POST_DETAIL } from "../actionContants/postActionConstants"

let initialState = {
  posts: [],
  postDetails: []
}

const postData = (state = initialState, action) => {

  switch (action.type) {
    case GET_POST_DATA:

      return {
        ...state,
        posts: [...action.payload]
      }

    case GET_POST_DETAIL:

      return {
        ...state,
        postDetails: [...action.payload]
      }

    default: return state

  }
}

export default postData