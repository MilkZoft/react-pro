// Action Types
import { FETCH_POSTS } from './actionTypes';

const initialState = {
  posts: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS.success(): {
      return {
        ...state,
        posts: action.payload
      };
    }

    default:
      return state;
  }
}
