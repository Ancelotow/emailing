export default {
    post: {
        tags: ["Messages"],
        description: "Ajoute un nouveau message",
        operationId: "messages.Add",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/message",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Ajout du message réussi",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Message has been created."
                        },
                    },
                },
            },
            400 : {
                description: "Le message existe déjà ou il y a des paramètres manquants",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "This message already existed."
                        },
                    },
                },
            },
        },
    },
};
