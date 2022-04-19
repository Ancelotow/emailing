import contactMod from "../models/contact.mjs"

/**
 * Add a new contact
 * @param contact The new contact
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddContact = (contact) => {
    return new Promise((resolve, _) => {
        if (contact == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.Add(contact).then((res) => {
                if (res) {
                    resolve({status: 201, data: "New contact has been created."})
                } else {
                    resolve({status: 405, data: "This contact already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Get all contacts
 * @returns {Promise<unknown}
 * @constructor
 */
const GetAllContacts = () => {
    return new Promise((resolve, _) => {
        contactMod.GetAll().then((res) => {
            resolve({status: 200, data: res})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

/**
 * Delete a contact
 * @param id The id of contact to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const DeleteContact = (id) => {
    return new Promise((resolve, _) => {
        if (id == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.Delete(id).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Contact has been deleted."})
                } else {
                    resolve({status: 400, data: "This contact not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Update a contact
 * @param contact The contact to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const UpdateContact = (contact) => {
    return new Promise((resolve, _) => {
        if (contact === null) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (contact.idcontact === null || contact.name === null || contact.firstname === null
            || contact.lastname === null || contact.mail === null || contact.creationDate === null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.Update(contact).then((res) => {
                if (res) {
                    resolve({status: 200, data: "Contact has been updated."})
                } else {
                    resolve({status: 400, data: "This contact not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}


/**
 * CONTACT LIST
 */

/**
 * GetAll for contact list
 * @constructor
 * @returns
 */
const GetAllContactsList = () => {
    return new Promise((resolve, _) => {
        contactMod.GetAllList().then((res) => {
            resolve({status: 200, data: res})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

/**
 * Add a new contact list
 * @param name The name of the new contact list
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddContactList = (contactlist) => {
    return new Promise((resolve, _) => {
        if (contactlist == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.AddList(contactlist).then((res) => {
                if (res) {
                    resolve({status: 201, data: "New contact list has been created."})
                } else {
                    resolve({status: 405, data: "This contact list already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Delete a contact list
 * @param id The id of contact list to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const DeleteContactList = (id) => {
    return new Promise((resolve, _) => {
        if (id == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.DeleteList(id).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Contact list has been deleted."})
                } else {
                    resolve({status: 400, data: "This contact list not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Update a contact list
 * @param contactlist The contact to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const UpdateContactList = (contactlist) => {
    return new Promise((resolve, _) => {
        if (contactlist === null) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (contactlist.idlist === null || contactlist.name === null || contactlist.description === null || contactlist.creationDate === null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            contactMod.UpdateList(contactlist).then((res) => {
                if (res) {
                    resolve({status: 200, data: "Contact list has been updated."})
                } else {
                    resolve({status: 400, data: "This contact list not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

export default {
    GetAllContacts,
    AddContact,
    DeleteContact,
    UpdateContact,
    GetAllContactsList,
    AddContactList,
    DeleteContactList,
    UpdateContactList
}
