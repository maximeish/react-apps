import initState from '../store/state';
import * as ACTION_TYPE from '../actions/action_types';

  const rootReducer = (state = initState, action) => {
    switch(action.type) {
      case ACTION_TYPE.LOGGED_IN:
        return Object.assign({}, state, {isAuthenticated: true});
      case ACTION_TYPE.LOGGED_OUT:
        return {
          ...state,
          isAuthenticated: false
        }
      default: 
        return state;
    }
  }
export default rootReducer;