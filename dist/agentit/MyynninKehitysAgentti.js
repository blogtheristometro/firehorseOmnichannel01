"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyynninKehitysAgentti = void 0;
const BaseAgentti_1 = require("../yhteiset/BaseAgentti");
class MyynninKehitysAgentti extends BaseAgentti_1.BaseAgentti {
    constructor() {
        super('Myynnin Kehitys Agentti');
    }
    async luoKehityssuunnitelma() {
        return {
            suunnitelma: 'Myynnin kehityssuunnitelma',
            toimenpiteet: []
        };
    }
}
exports.MyynninKehitysAgentti = MyynninKehitysAgentti;
//# sourceMappingURL=MyynninKehitysAgentti.js.map