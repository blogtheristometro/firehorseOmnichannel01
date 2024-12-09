"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketAnalyysiAgentti = void 0;
const BaseAgentti_1 = require("../yhteiset/BaseAgentti");
class MarketAnalyysiAgentti extends BaseAgentti_1.BaseAgentti {
    constructor() {
        super('Market Analyysi Agentti');
    }
    async analysoimarkkinat(markkinaData) {
        return {
            markkinaAnalyysi: 'Markkinatilanne',
            trendit: []
        };
    }
}
exports.MarketAnalyysiAgentti = MarketAnalyysiAgentti;
//# sourceMappingURL=MarketAnalyysiAgentti.js.map