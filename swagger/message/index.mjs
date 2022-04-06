import schema from "./_models.mjs"
import getAll from "./getAll.mjs";
import add from "./add.mjs"
import remove from "./delete.mjs"
import update from "./update.mjs";

export default  {
    paths: {
        "/message" : {
            ...getAll,
            ...add,
            ...update,
        },
        "/message/{id}" : {
            ...remove,
        }
    },
    schema : {
        ...schema,
    },
};
