import { createActions } from "reduxsauce";

export default createActions(
  {
    apiError: ["errorType", "errorReason"]
  },
  { prefix: "api/" }
);
