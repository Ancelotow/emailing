import {GetStats} from "../controllers/stats.controller.mjs";
import express from "express"

const routerStats = express.Router()

routerStats.get("/statistics",  async (req, res) => {
    const response = await GetStats()
    res.status(response.status).send(response.data)
});

export {routerStats}
