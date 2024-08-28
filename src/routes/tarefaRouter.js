import { Router } from "express";
import { getAll, create  } from "../controllers/tarefasController.js"

const router = Router();

router.get("/", getAll)
router.post("/", create)

export default router;
