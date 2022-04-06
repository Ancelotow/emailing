import {pool} from "../middleware/postgres.mjs"

class Message {
    idmessage
    object
    content
    sendDate
    sendHour
    sentDate
    sentHour
    idstate
    idlist
    idmodel
}

/**
 * Add new message
 * @param message The new message
 * @returns {Promise<unknown>}
 * @constructor
 */
const Add = (message) => {
    return new Promise((resolve, reject) => {
        const sendDate = (message.sendDate == null) ? null : `'${message.sendDate}'`
        const sendHour = (message.sendHour == null) ? null : `'${message.sendHour}'`
        const request = `INSERT INTO message(object, content, senddate, sendhour, idstate, idlist, idmodel)
                         VALUES ('${message.object}', '${message.content}', ${sendDate}, ${sendHour}
                                 , ${message.idstate}, ${message.idlist}, ${message.idmodel})`
        console.log(request)
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
 * Get a message by ID
 * @param id The ID of the message
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetById = (id) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM message
                         WHERE idmessage = ${id}`
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
 * Delete a message by this ID
 * @param id The ID of the message to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const Delete = (id) => {
    return new Promise((resolve, reject) => {
        GetById(id).then((result) => {
            if (result) {
                const request = `DELETE
                                 FROM message
                                 WHERE idmessage = ${id}`
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
 * Update a message
 * @param message The message to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const Update = (message) => {
    return new Promise((resolve, reject) => {
        GetById(message.idmessage).then((result) => {
            if (result) {
                const sendDate = (message.sendDate == null) ? null : `'${message.sendDate}'`
                const sendHour = (message.sendHour == null) ? null : `'${message.sendHour}'`

                const request = `UPDATE message
                                 SET object    = '${message.object}',
                                     content   = '${message.content}',
                                     senddate  = ${sendDate},
                                     sendhour = ${sendHour}
                                 WHERE idmessage = ${message.idmessage}`
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
 * Get all messages
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetAll = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT * FROM message`
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

export {Message, Add, GetById, Delete, Update, GetAll}
