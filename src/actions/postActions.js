import { GET_POST_DATA, GET_POST_DETAIL } from "../actionContants/postActionConstants";
import { fetchPostList, fetchPostDetails } from "../Apis/apis";


const setPost = (posts) => {
  return {
    type: GET_POST_DATA,
    payload: posts
  };
}

const setPostDetail = (details) => {
  return {
    type: GET_POST_DETAIL,
    payload: details
  };
}

export const getPostList = () => {

  return async (dispatch) => {

    const posts = await fetchPostList()
    dispatch(setPost(posts))
  }
}

export const getPostDetail = (postId) => {

  return async (dispatch) => {

    const postDetails = await fetchPostDetails(postId)
    dispatch(setPostDetail(postDetails))
  }
}