"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAgentti = void 0;
class BaseAgentti {
    constructor(nimi) {
        this.nimi = nimi;
        this.tila = 'odottaa';
    }
    getNimi() {
        return this.nimi;
    }
    getTila() {
        return this.tila;
    }
    async alusta() {
        this.tila = 'aktiivinen';
    }
    async lopeta() {
        this.tila = 'valmis';
    }
}
exports.BaseAgentti = BaseAgentti;
//# sourceMappingURL=BaseAgentti.js.map