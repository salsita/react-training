import { createActions } from "reduxsauce";

export default createActions(
  {
    entitiesFetched: ["route", "index", "result"]
  },
  { prefix: "crud/" }
);
