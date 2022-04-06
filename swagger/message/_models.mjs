export default  {
    message: {
        type: "object",
        properties: {
            idmessage: {
                type: "number",
                description: "Id du message",
                example: "5"
            },
            object: {
                type: "string",
                description: "Objet du message",
                example: "Informations importantes"
            },
            content: {
                type: "string",
                description: "Contenu du message",
                example: "Bonjour madame, monsieur" +
                    "Nous vous envoyons ce message pour vous avertir d'un changement sur votre dernière commande." +
                    "Cordialement," +
                    "John SMITH"
            },
            senddate: {
                type: "date",
                description: "Date de l'envoi",
                example: "20-05-2021"
            },
            sendhour: {
                type: "time",
                description: "Heure de l'envoi",
                example: "14:30"
            },
            idlist: {
                type: "number",
                description: "Id de la liste des contacts",
                example: "1"
            },
            idstate: {
                type: "number",
                description: "Id de l'état du message",
                example: "1"
            },
            idmodel: {
                type: "number",
                description: "Id du modèle du message",
                example: "1"
            },
        },
    },
    messages: {
        type: "object",
        additionalProperties: { $ref: '#/components/schemas/message' },
    },
};
