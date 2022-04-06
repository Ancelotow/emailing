export default {
    delete: {
        tags: ["Messages"],
        description: "Supprime un message",
        operationId: "messages.Delete",
        parameters: [
            {
                name: "id",
                in: "path",
                schemas: {
                    type: "number",
                    description: "Id du message",
                    example: "1"
                },
                required: true,
                description: "Id du message",
            },
        ],
        responses: {
            200: {
                description: "Le message a été supprimé",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Message has been deleted."
                        },
                    },
                },
            },
            400: {
                description: "Le message n'existe pas ou il y a des paramètres manquants",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "This message not exist."
                        },
                    },
                },
            },
        },
    },
};
