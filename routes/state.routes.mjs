import {GetAllState, AddState, DeleteState, UpdateState} from "../controllers/state.controller.mjs";
import express from "express"

const routerState = express.Router()

routerState.get("/state",  async (req, res) => {
    const response = await GetAllState()
    res.status(response.status).send(response.data)
});

routerState.post("/state/:name",  async (req, res) => {
    const response = await AddState(req.params.name)
    res.status(response.status).send(response.data)
});

routerState.delete("/state/:id",  async (req, res) => {
    const response = await DeleteState(req.params.id)
    res.status(response.status).send(response.data)
});

routerState.put("/state",  async (req, res) => {
    const response = await UpdateState(req.body)
    res.status(response.status).send(response.data)
});

export {routerState}
