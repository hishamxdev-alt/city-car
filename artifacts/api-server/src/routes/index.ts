import { Router, type IRouter } from "express";
import healthRouter from "./health";
import carsRouter from "./cars";
import statsRouter from "./stats";
import financingRouter from "./financing";
import favoritesRouter from "./favorites";

const router: IRouter = Router();

router.use(healthRouter);
router.use(carsRouter);
router.use(statsRouter);
router.use(financingRouter);
router.use(favoritesRouter);

export default router;
