import express from "express";
import { customersController } from "../routes";
// import { isLoggedInAPI } from "../utils/guard";
import { asyncWrapper } from "../utils/wrapper";

export const customersRoutes = express.Router();
customersRoutes.post("/register", asyncWrapper(customersController.register));
customersRoutes.get("/getCustomer", asyncWrapper(customersController.getCustomer));
customersRoutes.post("/login", asyncWrapper(customersController.login));
