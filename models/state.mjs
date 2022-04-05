import {pool} from "../middleware/postgres.mjs";

class State {
    idstate
    label
}

/**
 * Add new state
 * @param label The name of the new state
 * @returns {Promise<unknown>}
 * @constructor
 */
const Add = (label) => {
    return new Promise((resolve, reject) => {
        const request = `INSERT INTO state(label) VALUES ('${label}')`
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
 * Get a state by this ID
 * @param id The ID of the state
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetById = (id) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT * FROM state WHERE idstate = ${id}`
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
 * Delete a state by this ID
 * @param id The ID of the state to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
const Delete = (id) => {
    return new Promise((resolve, reject) => {
        GetById(id).then((result) => {
            if (result) {
                const request = `DELETE FROM state WHERE idstate = ${id}`
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
 * Update a state by this ID
 * @param state The state to update
 * @returns {Promise<unknown>}
 * @constructor
 */
const Update = (state) => {
    return new Promise((resolve, reject) => {
        GetById(state.idstate).then((result) => {
            if (result) {
                const request = `UPDATE state SET label = '${state.label}' WHERE idstate = ${state.idstate}`
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
 * Get list of states
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetAll = () => {
    return new Promise((resolve, reject) => {
        const request = `SELECT idstate, label FROM state`
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

export {State, Add, GetById, GetAll, Delete, Update}
