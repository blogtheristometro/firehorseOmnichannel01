import { OptimointiController } from '../agentit/OptimointiController';
import { MyynninKehitysAgentti } from '../agentit/MyynninKehitysAgentti';
import { KampanjaManageri } from '../agentit/KampanjaManageri';
import { LiidiManageri } from '../agentit/LiidiManageri';
import { MarketAnalyysiAgentti } from '../agentit/MarketAnalyysiAgentti';

export class AgenttiHallinta {
    private agentit: any[];

    constructor() {
        this.agentit = [
            new OptimointiController(),
            new MyynninKehitysAgentti(),
            new KampanjaManageri(),
            new LiidiManageri(),
            new MarketAnalyysiAgentti()
        ];
    }

    async kaynnista(): Promise<void> {
        for (const agentti of this.agentit) {
            await agentti.alusta();
        }
    }

    getAgentit(): any[] {
        return this.agentit;
    }
}