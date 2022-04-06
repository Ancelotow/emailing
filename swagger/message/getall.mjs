export default {
    get: {
        tags: ["Messages"],
        description: "Récupère tout les messages",
        operationId: "messages.GetAll",
        parameters: [],
        responses: {
            200: {
                description: "Liste de tout les messages",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/messages",
                        },
                    },
                },
            },
        },
    },
};
