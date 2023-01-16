import { knex } from "./main";
import express from "express";

import { CustomersService } from "./service/customersService";
import { CustomersController } from "./controller/customerController";

export const customersService = new CustomersService(knex);
export const customersController = new CustomersController(customersService);

import { customersRoutes } from "./router/customersRoutes";

export const routes = express.Router();
routes.use("/customers", customersRoutes);
