export const RECEIVE_BOOK = "RECEIVE_BOOK"

const defaultState = {
  greetingVisible: true
};

const settings = (state = defaultState, {type, payload}) => {
  switch(type){
    case RECEIVE_BOOK://todo fix me
      return {...state, greetingVisible:!state.greetingVisible}
    default:
      return state;
  }
};

export default settings;
