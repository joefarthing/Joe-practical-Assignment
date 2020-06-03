import Chat from "./Components/Chat";
import Login from "./Components/Login";
import React, { useState } from "react";
import Setting from "./Components/Setting";
import Logos from "./Components/Checkbox/logo/logo";
import Toolbar from "./Components/Toolbar/Toolbar.js";
import Backdrop from "./Components/Backdrop/Backdrop";
import EntryFeeling from "./Components/diary/EntryFeeling";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import CheckboxToggle from "./Components/Checkbox/Checkbox";
import HeaderPage from "./Components/Checkbox/Title/Header";
import Feelings from "./Components/Checkbox/Emotion/Emotion";
import Notification from "./Components/notification/notification";
import NumberLine from "./Components/Checkbox/NumberSystem/Number";
import NotificationHeader from "./Components/notification/NotificationHeader.js";

function App() {
  const [sideMenuState, setSideMenuState] = useState(false);

  const changeMenuState = () => {
    if (sideMenuState === true) {
      setSideMenuState(false);
    } else {
      setSideMenuState(true);
    }
  };

  let displayMenu;
  let displayBackdrop;
  if (sideMenuState) {
    displayMenu = <SideDrawer />;
    displayBackdrop = <Backdrop changeMenuState={changeMenuState} />;
  } else {
    displayMenu = "";
    displayBackdrop = "";
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar setSideMenuState={changeMenuState} />
      {displayMenu}
      {displayBackdrop}

      <main style={{ marginTop: "64px" }}>
        <Logos section="home" />
        <HeaderPage />
        <CheckboxToggle />
        <NumberLine />
        <Feelings />
        <NotificationHeader />
        <Notification />
        <EntryFeeling />
        <Chat />
        <Login />
        <Setting />
      </main>
    </div>
  );
}

export default App;
