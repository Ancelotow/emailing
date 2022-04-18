import {pool} from "../middleware/postgres.mjs";

class Account {
    id
    login
    password
    is_admin
}

/**
 * Get account by this login and password
 * @param login Login
 * @param password Password
 * @returns {Promise<unknown>}
 * @constructor
 */
const GetAccount = (login, password) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT *
                         FROM account
                         WHERE login = '${login}'
                           AND password = '${password}'`
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

const IfExistsLogin = (login, password) => {
    return new Promise((resolve, reject) => {
        const request = `SELECT COUNT(*)
                         FROM account
                         WHERE login = '${login}'`
        pool.query(request, (error, result) => {
            if (error) {
                reject(error)
            } else {
                let res = (result.rows.length > 0) ? result.rows[0] : null
                if(res && res.count > 0) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            }
        });
    });
}

/**
 * Add new account if not exists
 * @param account The new account to add
 * @returns {Promise<unknown>}
 * @constructor
 */
const Add = (account) => {
    return new Promise((resolve, reject) => {
        IfExistsLogin(account.login).then((ifExists) => {
            if(ifExists) {
                resolve(false)
            } else {
                const request = `INSERT INTO account(login, password, is_admin)
                         VALUES ('${account.login}', '${account.password}', ${account.is_admin})`
                pool.query(request, (error, result) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(true)
                    }
                });
            }
        }).catch((e) => {
          reject(e)
        });
    });
}

export {Account, Add, GetAccount}
