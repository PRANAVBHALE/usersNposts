import UrlConstants from "./urlConstants"

const fetchUserList = async () => {

  const response = await fetch(UrlConstants.USER_LIST)
  const data = await response.json()

  return data
}

const fetchPostList = async () => {

  const response = await fetch(UrlConstants.POST_LIST)
  const data = await response.json()

  return data
}

const fetchPostDetails = async (postId) => {

  const response = await fetch(`${UrlConstants.POST_DETAILS}?postId=${postId}`)
  const data = await response.json()

  return data
}



export { fetchUserList, fetchPostList, fetchPostDetails }