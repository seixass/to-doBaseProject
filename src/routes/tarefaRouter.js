import { Router } from "express";
import { getAll } from "../controllers/tarefasController.js"

const router = Router();

router.get("/", getAll)

export default router;
