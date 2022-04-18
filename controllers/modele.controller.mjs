import {Model, Add, Delete, GetAll, Update} from "../models/modele.mjs";

/**
 * Add a new model
 * @param model The new model
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddModel = (model) => {
    return new Promise((resolve, _) => {
        if (model == null ) {
            resolve({status: 400, data: "Missing parameters."})
        }else {
            Add(model).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Model created."})
                } else {
                    resolve({status: 400, data: "Model already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}


/**
 * Delete a model
 * @param id The id of model to delete
 * @returns {Promise<unknown>}
 * @constructor
 */
 const DeleteModel = (id) => {
    return new Promise((resolve, _) => {
        if (id == null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Delete(id).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Model has been deleted."})
                } else {
                    resolve({status: 400, data: "Model not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

/**
 * Get all models
 * @returns {Promise<unknown>}
 * @constructor
 */
 const GetAllModel = () => {
    return new Promise((resolve, _) => {
        GetAll().then((res) => {
            resolve({status: 200, data: res})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

/**
 * Update a model
 * @param model The model to update
 * @returns {Promise<unknown>}
 * @constructor
 */
 const UpdateModel = (model) => {
    return new Promise((resolve, _) => {
        if (model === null ) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Update(model).then((res) => {
                if (res) {
                    resolve({status: 200, data: "Model updated."})
                } else {
                    resolve({status: 400, data: "model not exist."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}



export {AddModel,DeleteModel,GetAllModel,UpdateModel}
