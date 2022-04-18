import {pool} from "../middleware/postgres.mjs"


class Model {
    idModel
    name
    filename
}


/**
 * Add new model
 * @param model The new model
 * @returns {Promise<unknown>}
 * @constructor
 */
 const Add = (model) => {
    return new Promise((resolve, reject) => {
        const request = `INSERT INTO model(name, filename)
                         VALUES ('${model.name}', '${model.filename}')`
        console.log(request)
        console.log(model.name + " " + model.filename)
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(true)
                console.log("request")
            }
        });
    });
}

/**
 * Get a mdodel by ID
 * @param id The ID of the model
 * @returns {Promise<unknown>}
 * @constructor
 */
 const GetById = (id) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM model
                         WHERE idModel = ${id}`
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
 * Delete a model by this ID
 * @param id The ID of the model to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
 const Delete = (id) => {
    return new Promise((resolve, reject) => {
        GetById(id).then((result) => {
            if (result) {
                const request = `DELETE
                                 FROM model
                                 WHERE idModel = ${id}`
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
        const request = `SELECT * FROM model`
        console.log(request)
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
 * Update a model
 * @param model The model to update
 * @returns {Promise<unknown>}
 * @constructor
 */
 const Update = (model) => {
    return new Promise((resolve, reject) => {
        GetById(model.idModel).then((result) => {
            if (result) {
                const request = `UPDATE model SET name = '${model.name}', filename   = '${model.filename}' WHERE idModel = ${model.idModel}`
                console.log(request)
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

export {Model, Add, Delete, GetAll, Update}
