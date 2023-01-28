import express from "express";
import { advertisementsController } from "../routes";
// import { isLoggedInAPI } from "../utils/guard";
import { asyncWrapper } from "../utils/wrapper";

export const advertisementsRoutes = express.Router();
advertisementsRoutes.get("/getAd", asyncWrapper(advertisementsController.getAd));
advertisementsRoutes.get("/getAdById", asyncWrapper(advertisementsController.getAdById));
advertisementsRoutes.post("/create", asyncWrapper(advertisementsController.createAd));
advertisementsRoutes.post("/delete", asyncWrapper(advertisementsController.deleteAd));
