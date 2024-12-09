"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KampanjaManageri = void 0;
const BaseAgentti_1 = require("../yhteiset/BaseAgentti");
class KampanjaManageri extends BaseAgentti_1.BaseAgentti {
    constructor() {
        super('Kampanja Manageri');
    }
    async hallitseKampanja(kampanjaTiedot) {
        return {
            kampanjanTila: 'aktiivinen',
            tulokset: []
        };
    }
}
exports.KampanjaManageri = KampanjaManageri;
//# sourceMappingURL=KampanjaManageri.js.map