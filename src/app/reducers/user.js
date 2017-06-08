export const RECEIVE_USER = "RECEIVE_USER"

export const userReducer = (state = {name:"not set"}, {type, payload}) => {
  switch(type){
    case RECEIVE_USER:
      const {id, name} = payload; //get only needed values
      return {id, name};
    default:
      return state;
  }
}

export default userReducer;
