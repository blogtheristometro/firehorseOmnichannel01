"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiidiManageri = void 0;
const BaseAgentti_1 = require("../yhteiset/BaseAgentti");
class LiidiManageri extends BaseAgentti_1.BaseAgentti {
    constructor() {
        super('Liidi Manageri');
    }
    async kasitteleliidi(liidiData) {
        return {
            liidiStatus: 'käsitelty',
            toimenpiteet: []
        };
    }
}
exports.LiidiManageri = LiidiManageri;
//# sourceMappingURL=LiidiManageri.js.map