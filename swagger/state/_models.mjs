export default  {
    state: {
        type: "object",
        properties: {
            idstate: {
                type: "number",
                description: "Id de l'état",
                example: "5"
            },
            label: {
                type: "string",
                description: "Nom de l'état ",
                example: "Brouillon"
            },
        },
    },
    states: {
        type: "object",
        additionalProperties: { $ref: '#/components/schemas/state' },
    },
};
