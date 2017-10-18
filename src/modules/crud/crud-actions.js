import { createActions } from "reduxsauce";

export default createActions(
  {
    entitiesFetched: ["route", "result"]
  },
  { prefix: "crud/" }
);
