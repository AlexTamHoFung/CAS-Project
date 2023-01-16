import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { logger } from "./utils/logger";
import Knex from "knex";
import config from "./knexfile";
import cors from "cors";

export const knex = Knex(config[process.env.NODE_ENV ?? "development"]);

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import { AuthController } from "./controllers/AuthController";
// import { AuthService } from "./services/AuthService";
// import { TodoService } from "./services/TodoService";
// import { TodoController } from "./controllers/TodoController";

// export const authService = new AuthService(knex);
// export const authController = new AuthController(authService);
// const todoService = new TodoService(knex);
// export const todoController = new TodoController(todoService);

// import { authRoutes } from "./router/authRoutes";
// import { todoRoutes } from "./router/todoRoutes";

// app.use("/auth", authRoutes);
// app.use("/todo", todoRoutes);

app.get("/", (_req, res) => {
	res.send("Hi");
});

app.use((req, _res, next) => {
	logger.debug(`Path: ${req.path},,, Method: ${req.method}`);
	next();
});

import { routes } from "./routes";
import { ApplicationError } from "./utils/error";
app.use(routes);

app.use((_req, res) => {
	res.sendFile(path.resolve("./public/404.html"));
});

app.use(
	(err: ApplicationError, _req: express.Request, res: express.Response) => {
		logger.error(err.message);
		res.status(err.httpStatus).json({ message: err.message });
	}
);

const port = 8080;
app.listen(port, () => {
	logger.info(`App listening on http://localhost:${port}`);
});
