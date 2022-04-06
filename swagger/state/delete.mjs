export default {
    delete: {
        tags: ["États des messages"],
        description: "Supprime un état de message",
        operationId: "state.Delete",
        parameters: [
            {
                name: "id",
                in: "path",
                schemas: {
                    type: "number",
                    description: "Id de l'état",
                    example: "1"
                },
                required: true,
                description: "Id de l'état",
            },
        ],
        responses: {
            200: {
                description: "L'état' a été supprimé",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "State has been deleted."
                        },
                    },
                },
            },
            400: {
                description: "L'état n'existe pas ou il y a des paramètres manquants",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "This state not exist."
                        },
                    },
                },
            },
        },
    },
};
