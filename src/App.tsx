import React, { FC } from "react";
import { Header } from "./components/Header";

import "./App.css";
import { UserList } from "./components/UserList";

const App: FC = () => {
  return (
    <div>
      <Header text={"User Management"} />
      <UserList />
    </div>
  );
};

export default App;
