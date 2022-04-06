export default {
    get: {
        tags: ["États des messages"],
        description: "Récupère tout les états de messages",
        operationId: "state.GetAll",
        parameters: [],
        responses: {
            200: {
                description: "Liste de tout les états de messages",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/states",
                        },
                    },
                },
            },
        },
    },
};
