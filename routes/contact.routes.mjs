import contactCtrl from "../controllers/contact.controller.mjs"
import express from "express"

const routerContact = express.Router()

/**
 * CONTACT
 */
// avoir tous les contacts
routerContact.get("/contact", async(req, res) => {
    const response = await contactCtrl.GetAllContacts()
    res.status(response.status).send(response.data)
});

// ajouter un nouveau contact
routerContact.post("/contact",  async (req, res) => {
    const response = await contactCtrl.AddContact(req.body)
    res.status(response.status).send(response.data)
});

// supprimer un contact par rapport à son id
routerContact.delete("/contact/:id",  async (req, res) => {
    const response = await contactCtrl.DeleteContact(req.params.id)
    res.status(response.status).send(response.data)
});

// mettre à jour un contact
routerContact.put("/contact",  async (req, res) => {
    const response = await contactCtrl.UpdateContact(req.body)
    res.status(response.status).send(response.data)
});

/**
 * CONTACT LIST
 */

routerContact.get("/contactlist", async(req, res) => {
    const response = await contactCtrl.GetAllContactsList()
    res.status(response.status).send(response.data)
});

routerContact.post("/contactlist",  async (req, res) => {
    const response = await contactCtrl.AddContactList(req.body)
    res.status(response.status).send(response.data)
});

routerContact.delete("/contactlist/:id",  async (req, res) => {
    const response = await contactCtrl.DeleteContactList(req.params.id)
    res.status(response.status).send(response.data)
});

routerContact.put("/contactlist",  async (req, res) => {
    const response = await contactCtrl.UpdateContactList(req.body)
    res.status(response.status).send(response.data)
});

export {routerContact}
