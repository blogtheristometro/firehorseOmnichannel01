import { AgenttiHallinta } from './palvelut/AgenttiHallinta';
import { OpenAIpalvelu } from './palvelut/OpenAIpalvelu';

async function main() {
    const openAI = new OpenAIpalvelu(process.env.OPENAI_API_KEY || '');
    await openAI.alustaAI();

    const agenttiHallinta = new AgenttiHallinta();
    await agenttiHallinta.kaynnista();

    console.log('Firehorse Omnichannel järjestelmä käynnistetty');
}

main().catch(console.error);