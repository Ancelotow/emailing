export default {
    put: {
        tags: ["Messages"],
        description: "Modifie un message existant",
        operationId: "messages.Update",
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
            200: {
                description: "Modification du message réussi",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "Message has been updated."
                        },
                    },
                },
            },
            400 : {
                description: "Le message n'existe pas ou il y a des paramètres manquants",
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
