import express from "express"

const routerMsg = express.Router()

routerMsg.get("/",  (req, res) => {
    res.status(200).send("Hello World !")
});

export {routerMsg}
