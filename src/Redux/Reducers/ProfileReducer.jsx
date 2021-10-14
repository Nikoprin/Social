import Avatar from './../../Images/Hacker.jpg';
const UPDATE_TEXT_VALUE = "UPDATE_TEXT_VALUE";
const ADD_NEW_POST = "ADD_NEW_POST";
let initialState = {
  posts: [
    {
      name: "Виталий Миини",
      description: "Здесь какое-нибудь описание",
      user: Avatar,
      id: 1,
    },
    {
      name: "Анна Волкова",
      description: "Здесь какое-нибудь описание",
      user: Avatar,
      id: 2,
    },
    {
      name: "София Нифёдова",
      description: "Здесь какое-нибудь описание",
      user: Avatar,
      id: 3,
    },
  ],
  newTextValue: "Привет",
  friends: [
    {
      name: "Анна Фролова",
      education: "Факультет социологии и права КПИ им. Игоря Сикорского",
      id: 1,
    },
    {
      name: "Энн Ширли",
      education:
        "Международный научно-технический университет имени академика Юрия Бугая (МНТУ)",
      id: 2,
    },
    {
      name: "Анастасия Монахова",
      education: "Медико-Природничий Університет",
      id: 3,
    },
    {
      name: "Виктория Делиу",
      education: "Бердянский университет менеджмента и бизнеса",
      id: 4,
    },
    {
      name: "София Урманко",
      education:
        "Международный научно-технический университет имени академика Юрия Бугая (МНТУ)",
      id: 5,
    },
  ],
}
const profileReducer = (state = initialState, action) => {
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
export const addPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updatePostValueActionCreator = (value) => {
    return {
      type: UPDATE_TEXT_VALUE,
      text: value,
    };
  };
export default profileReducer;
