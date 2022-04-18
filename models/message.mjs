import {pool} from "../middleware/postgres.mjs"

class Message {
    idmessage
    object
    content
    senddate
    sendhour
    sentdate
    senthour
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
        const sendDate = (message.senddate == null) ? null : `'${message.senddate}'`
        const sendHour = (message.sendhour == null) ? null : `'${message.sendhour}'`
        const request = `INSERT INTO message(object, content, senddate, sendhour, idstate, idlist, idmodel)
                         VALUES ( '${message.object}', '${message.content}', ${sendDate}, ${sendHour}
                                , ${message.idstate}, ${message.idlist}, ${message.idmodel})`
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
                const sentDate = (message.sentdate == null) ? null : `'${message.sentdate}'`
                const sentHour = (message.sendhour == null) ? null : `'${message.sendhour}'`
                const request = `UPDATE message
                                 SET object   = '${message.object}',
                                     content  = '${message.content}',
                                     senddate = ${sendDate},
                                     sendhour = ${sendHour},
                                     sentdate = ${sentDate},
                                     senthour = ${sentHour}
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
        const request = `SELECT *
                         FROM message`
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
 * Get last message send
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetLastMessageSend = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT msg.*
                         FROM message msg
                                  JOIN state st ON msg.idstate = st.idstate AND st.label = 'envoyé'
                         WHERE sentdate is not null
                           AND senthour is not null
                         ORDER BY msg.sentdate DESC, msg.senthour DESC`
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
 * Get number of message sent
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetNbMessageSend = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT COUNT(*)
                         FROM message msg
                                  JOIN state st ON msg.idstate = st.idstate AND st.label = 'envoyé'`
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
 * Get number of message by model
 * @param idmodel Id of model
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetNbMessageByModel = (idmodel) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT COUNT(*)
                         FROM message
                         WHERE idmodel = ${idmodel}`
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
    Message,
    Add,
    GetById,
    Delete,
    Update,
    GetAll,
    GetLastMessageSend,
    GetNbMessageByModel,
    GetNbMessageSend
}
