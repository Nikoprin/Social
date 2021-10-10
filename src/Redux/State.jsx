import Avatar from "./../Images/Hacker.jpg";
  import {renderEntireTree} from './../index';
  let state = {
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
    },
  };
  export const addNewPost = () =>  {
    let newPost = {
      name: "Анна Фролова",
      description: state.profilePage.newTextValue,
      user: Avatar,
      id: 4,
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
  };
  export const updateTextValue = (text) => {
    state.profilePage.newTextValue = text;
    renderEntireTree(state);
  };
  export const sendNewMessage = () => {
    let newMessage = {
      message: state.messagesPage.message,
      id: 5,
    };
    state.messagesPage.messages.push(newMessage);
    renderEntireTree(state);
  };
  export const updateMessageValue = (message) => {
    state.messagesPage.message = message;
    renderEntireTree(state);
  };
  // export let subscriber = (observer) => {
  //   renderEntireTree = observer;
  // }
  // export let dispatch = (action)  => {
  //   if (action.type == "addNewPost") {
  //     let newPost = {
  //       name: "Анна Фролова",
  //       description: _state.profilePage.newTextValue,
  //       user: Avatar,
  //       id: 4,
  //     };
  //     _state.profilePage.posts.push(newPost);
  //     renderEntireTree(state);
  //   } else if (action.type === "updateTextValue") {
  //     state.profilePage.newTextValue = action.text;
  //     renderEntireTree(state);
  //   }
  // };
export default state;
