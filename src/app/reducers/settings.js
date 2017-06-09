export const TOGGLE_GREETING = "TOGGLE_GREETING"

const defaultState = {
  greetingVisible: true
}

const settings = (state = defaultState, {type, payload}) => {
  switch(type){
  case TOGGLE_GREETING:
      return {...state, greetingVisible:!state.greetingVisible}
  default:
    return state;
  }
};

export default settings;
