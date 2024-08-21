import { Router } from "express";
import urlRoutes from "./url";

const routes = Router();

routes.use('/url', urlRoutes);

export default routes;