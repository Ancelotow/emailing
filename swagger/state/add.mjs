export default {
    post: {
        tags: ["États des messages"],
        description: "Ajoute un nouvel état de messages",
        operationId: "state.Add",
        parameters: [
            {
                name: "label",
                in: "path",
                schemas: {
                    type: "string",
                    description: "Nom de l'état",
                    example: "Brouillon"
                },
                required: true,
                description: "Nom de l'état",
            },
        ],
        responses: {
            201: {
                description: "Ajout de l'état réussi",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "State has been created."
                        },
                    },
                },
            },
            400 : {
                description: "L'état existe déjà ou il y a des paramètres manquants",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "This state already existed."
                        },
                    },
                },
            },
        },
    },
};
