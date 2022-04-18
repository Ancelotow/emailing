import messageMod from "../models/message.mjs";
import accountMod from "../models/account.mjs";
import {GetAll} from "../models/modele.mjs"

/**
 * Get statistics (nb admin, nb user, nb message by types, nb contacts, nb lists, last message send, nb message send)
 * @constructor
 */
const GetStats = () => {
    return new Promise(async (resolve, reject) => {
        const nbAdmin = await accountMod.Length(true)
        const nbUser = await accountMod.Length(false)
        const lastMessageSent = await messageMod.GetLastMessageSend()
        const nbMessageSent = await messageMod.GetNbMessageSend()
        const listModel = await GetAll()
        const nbMessagesByModels = {}
        // TODO: Nb contacts
        // TODO: Nb lists
        for (const mod of listModel) {
            nbMessagesByModels[mod.name] = await messageMod.GetNbMessageByModel(mod.idmodel)
        }
        const result = {
            nbAdmin,
            nbUser,
            lastMessageSent,
            nbMessageSent,
            nbMessagesByModels
        }
        resolve({status: 200, data: result})
    });
}

export {GetStats}
