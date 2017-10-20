import { createActions } from "reduxsauce";

export default createActions(
  {
    saveUser: ["user"]
  },
  { prefix: "users/" }
);
