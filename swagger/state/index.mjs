import schema from "./_models.mjs"
import getAll from "./getAll.mjs";
import add from "./add.mjs"
import remove from "./delete.mjs"
import update from "./update.mjs";

export default  {
    paths: {
        "/state" : {
            ...getAll,
            ...update,
        },
        "/state/{id}" : {
            ...remove,
        },
        "/state/{label}" : {
            ...add,
        }
    },
    schema : {
        ...schema,
    },
};
