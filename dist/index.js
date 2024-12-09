"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AgenttiHallinta_1 = require("./palvelut/AgenttiHallinta");
const OpenAIpalvelu_1 = require("./palvelut/OpenAIpalvelu");
async function main() {
    const openAI = new OpenAIpalvelu_1.OpenAIpalvelu(process.env.OPENAI_API_KEY || '');
    await openAI.alustaAI();
    const agenttiHallinta = new AgenttiHallinta_1.AgenttiHallinta();
    await agenttiHallinta.kaynnista();
    console.log('Firehorse Omnichannel järjestelmä käynnistetty');
}
main().catch(console.error);
//# sourceMappingURL=index.js.map