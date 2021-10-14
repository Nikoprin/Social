import Avatar from "./../Images/Hacker.jpg";
import messageReducer from "./Reducers/MessagesReducer";
import profileReducer from "./Reducers/ProfileReducer";
import sidebarReducer from "./Reducers/SidebarReducer";
let store = {
  _rerenderEntireTree() {},
  _state: {
    profilePage: {
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
    },
    messagesPage: {
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
      messageValue: "Привет",
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  sendNewMessage() {},
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;