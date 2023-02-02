import express from "express";
import { transactionsController } from "../routes";
// import { isLoggedInAPI } from "../utils/guard";
import { asyncWrapper } from "../utils/wrapper";

export const transactionsRoutes = express.Router();
transactionsRoutes.get("/get", asyncWrapper(transactionsController.getTransaction));
transactionsRoutes.post("/create", asyncWrapper(transactionsController.createTransaction));

