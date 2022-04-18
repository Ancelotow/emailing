import {Add} from "../models/account.mjs";

/**
 * Add a new account
 * @param account The new account
 * @returns {Promise<unknown>}
 * @constructor
 */
const AddAccount = (account) => {
    return new Promise((resolve, _) => {
        if (!account) {
            resolve({status: 400, data: "Missing parameters."})
        } else if (!account.login || !account.login) {
            resolve({status: 400, data: "Missing parameters."})
        } else {
            Add(account).then((res) => {
                if (res) {
                    resolve({status: 201, data: "Account has been created."})
                } else {
                    resolve({status: 400, data: "This account already existed."})
                }
            }).catch((e) => {
                resolve({status: 500, data: e})
            })
        }
    });
}

export {AddAccount}
