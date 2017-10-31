import { createActions } from "reduxsauce";

export default createActions(
  {
    apiError: ["errorType", "errorReason"],
    startLoading: null,
    stopLoading: null
  },
  { prefix: "api/" }
);
