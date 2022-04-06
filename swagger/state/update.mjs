export default {
    put: {
        tags: ["États des messages"],
        description: "Modifie un état existant",
        operationId: "state.Update",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/state",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Modification de l'état réussi",
                content: {
                    "text/plain": {
                        schema: {
                            type: "string",
                            example: "State has been updated."
                        },
                    },
                },
            },
            400 : {
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
