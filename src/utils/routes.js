import UserDetail from "../components/UserDetail";
import PostList from "../components/PostList";
import PostDetails from "../components/PostDetails";
import ROUTE_CONSTANTS from "./routeConstants";

const routes = [
  {
    path: ROUTE_CONSTANTS.POST_LIST, //postlist
    component: PostList
  },
  {
    path: ROUTE_CONSTANTS.POST_DETAILS, //postcomments
    component: PostDetails
  },
  {
    path: ROUTE_CONSTANTS.USER_DETAILS, //USERS
    component: UserDetail
  },

];

export default routes