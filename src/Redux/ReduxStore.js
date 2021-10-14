import { createStore, combineReducers } from 'redux';
import messageReducer from './Reducers/MessagesReducer';
import profileReducer from './Reducers/ProfileReducer';
import sidebarReducer from './Reducers/SidebarReducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer
});
let store = createStore(reducers);
export default store;