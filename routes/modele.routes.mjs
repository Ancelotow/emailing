import {AddModel,DeleteModel,GetAllModel,UpdateModel} from "../controllers/modele.controller.mjs";
import express from "express"

const routerMod = express.Router()


// Ajout de model
routerMod.post("/model",  async (req, res) => {
    const response = await AddModel(req.body)
    res.status(response.status).send(response.data)
});

//Supprimer un model
routerMod.delete("/model/:id",  async (req, res) => {
    const response = await DeleteModel(req.params.id)
    res.status(response.status).send(response.data)
});

// Liste des models
routerMod.get("/model",  async (req, res) => {
    const response = await GetAllModel()
    res.status(response.status).send(response.data)
});

// Modifier un model
routerMod.put("/model",  async (req, res) => {
    const response = await UpdateModel(req.body)
    res.status(response.status).send(response.data)
});

// Aficher names + template
routerMod.get('/model/:idmodel?firstname=?&lastname=?', (req, res) => {
    const idmodel = req.params.idmodel
    const firstN = req.params.firstname
    const lastN = req.params.lastname
    console.log("ok")
    
    const pdt = getByMod(idmodel,firstN,lastN)
  
    res.send(pdt ? JSON.stringify(pdt) : `Produit "${name}" introuvable`)
  })

export{routerMod}