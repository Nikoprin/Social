const UPDATE_MESSAGE_VALUE = "UPDATE_MESSAGE_VALUE";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  users: [
    {
      user: "Anastasia",
      id: 1,
    },
    {
      user: "Victoria",
      id: 2,
    },
    {
      user: "Nikolai",
      id: 3,
    },
    {
      user: "Elisabeth",
      id: 4,
    },
    {
      user: "Anne",
      id: 5,
    },
  ],
  message: "Привет",
  messages: [
    {
      message: "Привет",
      id: 1,
    },
    {
      message: "Не хочешь немного погулять?",
      id: 2,
    },
    {
      message: "Со мной будет моя одинокая подружка=)",
      id: 3,
    },
  ],
}

export const messageReducer = (state = initialState, action) => {
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

export const sendNewMessage = () => ({ type: SEND_MESSAGE });
export const updateMessageValueActionCreator = (value) => {
  return {
    type: UPDATE_MESSAGE_VALUE,
    message: value,
  };
};

export default messageReducer;