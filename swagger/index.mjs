import messages from "./message/index.mjs";
import states from "./state/index.mjs";

export default {
    openapi: "3.0.1",
    info: {
        version: "1.0.0",
        title: "Emailing",
        description: "API en NodeJS pour envoyé des mails",
        contact: {
            name: "ESGI",
            email: "test@myges.fr",
            url: "https://esgi.fr",
        },
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local server",
        },
    ],
    paths: {
        ...messages.paths,
        ...states.paths,
    },
    components: {
        schemas: {
            ...messages.schema,
            ...states.schema,
        },
    },
};
