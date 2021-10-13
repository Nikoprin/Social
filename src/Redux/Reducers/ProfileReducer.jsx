import Avatar from './../../Images/Hacker.jpg';
const UPDATE_TEXT_VALUE = "UPDATE_TEXT_VALUE";
const ADD_NEW_POST = "ADD_NEW_POST";
export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updatePostValueActionCreator = (value) => {
    return {
      type: UPDATE_TEXT_VALUE,
      text: value,
    };
  };
const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        name: "Анна Фролова",
        description: state.newTextValue,
        user: Avatar,
        id: 4,
      };
      state.posts.push(newPost);
      state.newTextValue = "";
      return state;
    case UPDATE_TEXT_VALUE:
      state.newTextValue = action.text;
      return state;
    default:
      return state;
  }
};
export default profileReducer;
