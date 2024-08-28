import { Router } from "express";
import { getAll, create, getTarefa, updateTarefa } from "../controllers/tarefasController.js";

const router = Router();

router.get("/", getAll);
router.post("/", create);
router.get("/:id", getTarefa);
router.put("/:id", updateTarefa);

export default router;
