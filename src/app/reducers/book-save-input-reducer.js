export const BOOK_SAVE_INPUT = "BOOK_SAVE_INPUT"

const defaultState = {
  inputBookSearchVal: 'ssssearchMe'
};

const saveBookInput = (state = defaultState, {type, payload}) => {
  switch(type){
    case BOOK_SAVE_INPUT:
      return {...state, inputBookSearchVal:payload.inputBookSearchVal}
    default:
      return state;
  }
};

export default saveBookInput;
