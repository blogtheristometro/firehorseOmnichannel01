"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgenttiHallinta = void 0;
const OptimointiController_1 = require("../agentit/OptimointiController");
const MyynninKehitysAgentti_1 = require("../agentit/MyynninKehitysAgentti");
const KampanjaManageri_1 = require("../agentit/KampanjaManageri");
const LiidiManageri_1 = require("../agentit/LiidiManageri");
const MarketAnalyysiAgentti_1 = require("../agentit/MarketAnalyysiAgentti");
class AgenttiHallinta {
    constructor() {
        this.agentit = [
            new OptimointiController_1.OptimointiController(),
            new MyynninKehitysAgentti_1.MyynninKehitysAgentti(),
            new KampanjaManageri_1.KampanjaManageri(),
            new LiidiManageri_1.LiidiManageri(),
            new MarketAnalyysiAgentti_1.MarketAnalyysiAgentti()
        ];
    }
    async kaynnista() {
        for (const agentti of this.agentit) {
            await agentti.alusta();
        }
    }
    getAgentit() {
        return this.agentit;
    }
}
exports.AgenttiHallinta = AgenttiHallinta;
//# sourceMappingURL=AgenttiHallinta.js.map