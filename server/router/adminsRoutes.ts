import express from "express";
import { adminsController } from "../routes";
import { isStoreLoggedIn } from "../utils/guard";
import { asyncWrapper } from "../utils/wrapper";

export const adminsRoutes = express.Router();
// admins
adminsRoutes.get(
	"/admin/:username",
	isStoreLoggedIn,
	asyncWrapper(adminsController.getAdmin)
);
adminsRoutes.post("/login", asyncWrapper(adminsController.login));
