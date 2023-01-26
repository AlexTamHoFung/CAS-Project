import { knex } from "./main";
import express from "express";

import { CustomersService } from "./service/customersService";
import { CustomersController } from "./controller/customerController";
import { CompaniesService } from "./service/companiesService";
import { CompaniesController } from "./controller/companyController";
import { StoresService } from "./service/storesService";
import { StoresController } from "./controller/storeController";

export const customersService = new CustomersService(knex);
export const customersController = new CustomersController(customersService);
export const companiesService = new CompaniesService(knex);
export const companiesController = new CompaniesController(companiesService);
export const storesService = new StoresService(knex);
export const storesController = new StoresController(storesService);

import { customersRoutes } from "./router/customersRoutes";
import { companiesRoutes } from "./router/companiesRoutes";
import { storesRoutes } from "./router/storesRoutes";

export const routes = express.Router();
routes.use("/customers", customersRoutes);
routes.use("/companies", companiesRoutes);
routes.use("/stores", storesRoutes);
