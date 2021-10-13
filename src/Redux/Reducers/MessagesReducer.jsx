const UPDATE_MESSAGE_VALUE = "UPDATE_MESSAGE_VALUE";
const SEND_MESSAGE = "SEND_MESSAGE";
export const sendNewMessage = () => ({ type: SEND_MESSAGE });
export const updateMessageValueActionCreator = (value) => {
  return {
    type: UPDATE_MESSAGE_VALUE,
    message: value,
  };
};
export const messageReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        message: state.message,
        id: 5,
      };
      state.messages.push(newMessage);
      state.message = "";
      return state;
    case UPDATE_MESSAGE_VALUE:
      state.message = action.message;
      return state;
    default:
      return state;
  }
};

export default messageReducer;