import {AddMessage, DeleteMessage, GetAllMessage, UpdateMessage} from "../controllers/message.controller.mjs";
import express from "express"

const routerMsg = express.Router()

routerMsg.get("/message",  async (req, res) => {
    const response = await GetAllMessage()
    res.status(response.status).send(response.data)
});

routerMsg.post("/message",  async (req, res) => {
    const response = await AddMessage(req.body)
    res.status(response.status).send(response.data)
});

routerMsg.delete("/message/:id",  async (req, res) => {
    const response = await DeleteMessage(req.params.id)
    res.status(response.status).send(response.data)
});

routerMsg.put("/message",  async (req, res) => {
    const response = await UpdateMessage(req.body)
    res.status(response.status).send(response.data)
});

export {routerMsg}
