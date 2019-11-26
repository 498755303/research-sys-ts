import { Application, Router } from "egg";

export default (app: Application) => {
  const { controller, jwt } = app;
  console.log(controller.v1)
  const { home, company, user } = controller.v1;
  const apiV1: Router = app.router.namespace("/api/v1");
  // apiV1.post("/login", loginAuth);
  apiV1.get("/", home.index);
  apiV1.post("/auth.user.register", user.register);

  apiV1.get("/company.list.get", jwt, company.get);
};
