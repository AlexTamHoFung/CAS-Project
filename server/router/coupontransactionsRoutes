import express from "express";
import { coupontransactionsController } from "../routes";
// import { isLoggedInAPI } from "../utils/guard";
import { asyncWrapper } from "../utils/wrapper";

export const coupontransactionsRoutes = express.Router();
coupontransactionsRoutes.get("/get", asyncWrapper(coupontransactionsController.getCoupontransaction));
coupontransactionsRoutes.post("/create", asyncWrapper(coupontransactionsController.createCoupontransaction));

