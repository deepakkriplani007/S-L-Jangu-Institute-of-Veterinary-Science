import { combineReducers } from "redux";
// import trendingArticles from "./ArticlesReducer";
// import authData from "./AuthReducer";
import profile from "./ProfileReducer";
// import notifications from "./Notifications";
// import chatbot from "./ChatbotReducer";
// import chatshow from "./Chatshowreducer";

const rootReducer = combineReducers({
  profile,
});

export default rootReducer;
