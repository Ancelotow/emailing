import {State, Add, Delete, Update, GetAll} from "../models/state.mjs";

/**
 * Add a new state
 * @param name The name of the new state
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddState = (name) => {
    return new Promise((resolve, _) => {
        if (name == null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Add(name).then((res) => {
                if (res) {
                    resolve({status: 201, data: "State has been created."})
                } else {
                    resolve({status: 400, data: "This state already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Delete a state
 * @param id The id of state to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const DeleteState = (id) => {
    return new Promise((resolve, _) => {
        if (id == null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Delete(id).then((res) => {
                if (res) {
                    resolve({status: 200, data: "State has been deleted."})
                } else {
                    resolve({status: 400, data: "This state not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Update a state
 * @param state The state to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const UpdateState = (state) => {
    return new Promise((resolve, _) => {
        if (state === null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (state.idstate === null || state.label === null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Update(state).then((res) => {
                if (res) {
                    resolve({status: 200, data: "State has been updated."})
                } else {
                    resolve({status: 400, data: "This state not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Get all states
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetAllState = () => {
    return new Promise((resolve, _) => {
        GetAll().then((res) => {
            resolve({status: 200, data: res})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

export {AddState, UpdateState, DeleteState, GetAllState}
