import express from "express";
import authContrl from "../controllers/auth.controller";
import userCtrl from "../controllers/user.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

router
  .route("/api/users/:userId")
  .get(authContrl.requireSignin, userCtrl.read)
  .put(authContrl.requireSignin, authContrl.hasAuthorization, userCtrl.update)
  .delete(authContrl.requireSignin, authContrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userById);

export default router;
