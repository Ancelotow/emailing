import accountMod from "../models/account.mjs";
import jwt from "jsonwebtoken";

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
            accountMod.Add(account).then((res) => {
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

/**
 * Authentification d'un utilisateur
 * @param login L'identifiant de connexion
 * @param password Le mot de passe
 * @returns {Promise<unknown>}
 * @constructor
 */
const Authentication = (login, password) => {
    return new Promise((resolve, _) => {
        if(login == null || password == null) {
            resolve({status: 400, data: "Missing parameters."})
        }
        accountMod.GetAccount(login, password).then((res) => {
            if(!res) {
                resolve({status: 401, data: "This login and password not matching."})
            }
            resolve({status: 200, data: GenerateToken(login)})
        }).catch((e) => {
            resolve({status: 500, data: e})
        })
    });
}

/**
 * Génère le JWT token
 * @param login L'identifiant de connexion
 * @returns {*|null}
 * @constructor
 */
const GenerateToken = (login) => {
    if(!login) {
        return null
    }
    return jwt.sign({login}, process.env.TOKEN, { expiresIn: "1d" })
}

export {AddAccount, Authentication}
