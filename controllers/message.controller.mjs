import {Message, Add, Delete, Update, GetAll} from "../models/message.mjs";

/**
 * Add a new message
 * @param message The new message
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddMessage = (message) => {
    return new Promise((resolve, _) => {
        if (message == null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (message.idlist === null || message.idmodel === null || message.idstate === null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            if(message.sendDate === null) {
                message.sendDate = new Date()
            }
            if(message.sendHour === null) {
                message.sendHour = (new Date()).getTime()
            }
            Add(message).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Message has been created."})
                } else {
                    resolve({status: 400, data: "This message already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Delete a message
 * @param id The id of message to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const DeleteMessage = (id) => {
    return new Promise((resolve, _) => {
        if (id == null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Delete(id).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Message has been deleted."})
                } else {
                    resolve({status: 400, data: "This message not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Update a message
 * @param message The message to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const UpdateMessage = (message) => {
    return new Promise((resolve, _) => {
        if (message === null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (message.idstate === null || message.idstate == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (message.idlist === null || message.idmodel == null) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Update(message).then((res) => {
                if (res) {
                    resolve({status: 200, data: "Message has been updated."})
                } else {
                    resolve({status: 400, data: "This message not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Get all messages
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetAllMessage = () => {
    return new Promise((resolve, _) => {
        GetAll().then((res) => {
            resolve({status: 200, data: res})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

export {AddMessage, UpdateMessage, DeleteMessage, GetAllMessage}
