import { combineReducers } from 'redux';

const counterReducer = (state = { value: 0 }, action) => {
  switch(action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      }
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      }
    case 'RESET':
      return {
        ...state,
        value: 0,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counterReducer
});

export default rootReducer;