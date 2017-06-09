export const RECEIVE_BOOK = "RECEIVE_BOOK"

export const bookReducer = (state = {name:"not set"}, {type, payload}) => {
  switch(type){
    case RECEIVE_BOOK:
      const {id, name} = payload; //get only needed values
      return {id, name};
    default:
      return state;
  }
}

export default bookReducer;
