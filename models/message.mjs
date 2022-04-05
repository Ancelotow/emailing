import {pool} from "../middleware/postgres.mjs"

class Message {
    id
    object
    content
    sendDate
    sendHour
    sentDate
    sentHour
    state
    model
    list
}

/**
 * Add new message
 * @param message The new message
 * @returns {Promise<unknown>}
 * @constructor
 */
const Add = (message) => {
    return new Promise((resolve, reject) => {
        const request = `INSERT INTO message(object, content, sendDate, sendHour, idState, idList, idModel)
                         VALUES ('${message.object}', '${message.content}', '${message.sendDate}', '${message.sendHour}
                                 ', ${message.state}, ${message.list}, ${message.model})`
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
        const request = `SELECT * FROM message WHERE id = ${id}`
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
            if (!result) {
                const request = `DELETE FROM message WHERE id = ${id}`
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

// TODO: Update()

// TODO: GetAll()

export {Message, Add, GetById, Delete}
