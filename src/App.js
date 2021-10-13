import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Friends from "./Components/Friends/Friends";
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          name="Nikolai Prinko"
          skill="Front-End Developer"
          city="Ukraine"
        />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/Profile"
            render={() => {
              return (
                <Profile
                  name="Nikolai Prinko"
                  skill="Front-End Development"
                  posts={props.state.profilePage.posts}
                  newTextValue={props.state.profilePage.newTextValue}
                  dispatch={props.dispatch}
                />
              );
            }}
          />
          <Route
            path="/Friends"
            render={() => {
              return <Friends friends={props.state.profilePage.friends} />;
            }}
          />
          <Route
            path="/Messages"
            render={() => {
              return (
                <Messages
                  users={props.state.messagesPage.users}
                  messages={props.state.messagesPage.messages}
                  newMessage={props.state.messagesPage.message}
                  dispatch={props.dispatch}
                />
              );
            }}
          />
          <Route path="/Skills" render={Skills} />
          <Route path="/Education" render={Education} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
