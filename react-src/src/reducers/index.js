import { combineReducers } from 'redux'
import sessionReducer from './session';

import { 
	ADD_ARTICLE
} from "../constants/action-types";

const article = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  article,
  sessionState: sessionReducer
})

export default rootReducer;