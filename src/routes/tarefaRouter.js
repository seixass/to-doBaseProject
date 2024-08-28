import { Router } from "express";
import { getAll, create, getTarefa } from "../controllers/tarefasController.js";

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getTarefa);

export default router;
