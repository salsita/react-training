import createRouter from "router5";
import browserPlugin from "router5/plugins/browser";
import listenersPlugin from "router5/plugins/listeners";

import routes from "modules/routing/routes";

const buildRouter = () =>
  createRouter(routes)
    .usePlugin(browserPlugin({ useHash: false }))
    .usePlugin(listenersPlugin());

export default buildRouter;
