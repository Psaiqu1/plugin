export default {
    onLoad: function () {
        const { metro, commands, logger } = vendetta;
        const { sendBotMessage: sendEphemeralClydeMessage } = metro.findByProps("sendBotMessage");
        const MessageActions = metro.findByProps("sendMessage", "receiveMessage")

        this.onUnload = commands.registerCommand({
            name: "spam",
            displayName: "spam",
            description: "spammar mensages no chat",
            displayDescription: "spamar msg no chat(usando sua acc e clyde)",
            options: [
                // ... Seus outros campos de opções aqui ...
            ],
            applicationId: -1,
            inputType: 1,
            type: 1,
            execute: async (args, ctx) => {
                try {
                    let mensagem = args.find((sla) => sla.name == "mensagem");
                    let quantidade = args.find((sla) => sla.name == "quantidade");
                    let clyde = args.find((sla) => sla.name == "clyde");
                    let id = args.find((sla) => sla.name == "id");
                    
                    if (id) {
                        id = id.value;
                    } else {
                        id = ctx.channel.id;
                    }
                    
                    for (let i = 0; i < quantidade.value; i++) {
                        // Usando setTimeout para atrasar o envio de cada mensagem em 1 segundo
                        setTimeout(async () => {
                            if (!clyde || !clyde.value) {
                                await MessageActions.sendMessage(id, {
                                    content: mensagem.value
                                });
                            } else {
                                sendEphemeralClydeMessage(id, mensagem.value);
                            }
                        }, i * 500); // Atraso em milissegundos, ou seja, 1 segundo (1000 ms)
                    }

                    sendEphemeralClydeMessage(ctx.channel.id, `pronto!`);
                } catch (err) {
                    logger.log(err);
                    sendEphemeralClydeMessage(ctx.channel.id, err);
                }
            }
        });
    },

};
