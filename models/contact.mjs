import {pool} from "../middleware/postgres.mjs";

class Contact {
    idcontact
    name
    firstname
    lastname
    mail
    creationDate
}

class ContactList {
    idliste
    name
    description
    creationDate
}

/**
 * Get a contact by his ID
 * @param id The ID of the contact
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetById = (id) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM contact
                         WHERE idcontact = ${id}`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows[0] : null
                resolve(res)
            }
        });
    });
}

/**
 * Add new contact
 * @param contact The new contact
 * @returns {Promise<unknown>}
 * @constructor
 */
const Add = (contact) => {
    return new Promise((resolve, reject) => {
        const request = `INSERT INTO contact(name, firstname, lastname, mail, creationDate)
                         VALUES ('${contact.name}',
                                 '${contact.firstname}', '${contact.lastname}', '${contact.mail}',
                                 '${contact.creationDate}')`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        });
    });
}

/**
 * Get list of contacts
 * @returns {Promise<unknown}
 * @constructor
 */
const GetAll = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM contact`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows : null
                resolve(res)
            }
        });
    });
}

/**
 * Get length of contact
 * @returns {Promise<unknown>}
 * @constructor
 */
const Length = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT COUNT(*)
                         FROM contact`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows[0] : null
                if (res) {
                    resolve(res.count)
                } else {
                    resolve(0)
                }
            }
        });
    });
}

/**
 * Delete a contact by his ID
 * @param id The ID of the contact to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const Delete = (id) => {
    return new Promise((resolve, reject) => {
        GetById(id).then((result) => {
            if (result) {
                const request = `DELETE
                                 FROM contact
                                 WHERE idcontact = ${id}`
                pool.query(request, (error, _) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(true)
                    }
                });
            } else {
                resolve(false)
            }
        }).catch((e) => {
            reject(e)
        });
    });
}

/**
 * Update a contact by his ID
 * @param contact The contact to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const Update = (contact) => {
    return new Promise((resolve, reject) => {
        GetById(contact.idcontact).then((result) => {
            if (result) {
                const request = `UPDATE contact
                                 SET name         = '${contact.name}',
                                     firstname    = '${contact.firstname}',
                                     lastname     = '${contact.lastname}',
                                     mail         = '${contact.mail}',
                                     creationDate = '${contact.creationDate}'
                                 WHERE idcontact = ${contact.idcontact}`
                pool.query(request, (error, _) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(true)
                    }
                });
            } else {
                resolve(false)
            }
        }).catch((e) => {
            reject(e)
        });
    });
}

/**
 * CONTACT LIST
 */

/**
 * Get contact list
 * @returns {Promise<unknown}
 * @constructor
 */
const GetAllList = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT idlist, description, creationDate
                         FROM list`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows : null
                resolve(res)
            }
        });
    });
}

/**
 * Add new contact list
 * @param label The name of the new contact
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddList = (contactlist) => {
    return new Promise((resolve, reject) => {
        const request = `INSERT INTO list(name, description, creationDate)
                         VALUES ('${contactlist.name}', '${contactlist.description}', '${contactlist.creationDate}')`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(true)
            }
        });
    });
}

/**
 * Delete a contact by his ID
 * @param id The ID of the contact to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const DeleteList = (id) => {
    return new Promise((resolve, reject) => {
        GetByIdForList(id).then((result) => {
            if (result) {
                const request = `DELETE
                                 FROM list
                                 WHERE idlist = ${id}`
                pool.query(request, (error, _) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(true)
                    }
                });
            } else {
                resolve(false)
            }
        }).catch((e) => {
            reject(e)
        });
    });
}

/**
 * Get a contact list by her ID
 * @param id The ID of the contact list
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetByIdForList = (id) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM list
                         WHERE idlist = ${id}`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows[0] : null
                resolve(res)
            }
        });
    });
}

/**
 * Update a contact list by her ID
 * @param contactlist The contact list to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const UpdateList = (contactlist) => {
    return new Promise((resolve, reject) => {
        GetByIdForList(contactlist.idlist).then((result) => {
            if (result) {
                const request = `UPDATE list
                                 SET name         = '${contactlist.name}',
                                     description  = '${contactlist.description}',
                                     creationDate = '${contactlist.creationDate}'
                                 WHERE idlist = ${contactlist.idlist}`
                pool.query(request, (error, _) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(true)
                    }
                });
            } else {
                resolve(false)
            }
        }).catch((e) => {
            reject(e)
        });
    });
}

/**
 * Get length of list
 * @returns {Promise<unknown>}
 * @constructor
 */
const LengthList = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT COUNT(*)
                         FROM list`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows[0] : null
                if (res) {
                    resolve(res.count)
                } else {
                    resolve(0)
                }
            }
        });
    });
}

export default {
    GetAll,
    Add,
    Delete,
    Update,
    GetById,
    Contact,
    GetAllList,
    AddList,
    ContactList,
    GetByIdForList,
    DeleteList,
    UpdateList,
    Length,
    LengthList
}
