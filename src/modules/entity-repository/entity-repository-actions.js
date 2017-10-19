import { createActions } from "reduxsauce";

export default createActions(
  {
    repositoryHasChanged: ["repository"]
  },
  { prefix: "entity-repository/" }
);
