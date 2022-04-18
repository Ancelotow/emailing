import {AddAccount} from "../controllers/auth.controller.mjs";
import express from "express"

const routerAuth = express.Router()

routerAuth.post("/register",  async (req, res) => {
    const response = await AddAccount(req.body)
    res.status(response.status).send(response.data)
});

export {routerAuth}
