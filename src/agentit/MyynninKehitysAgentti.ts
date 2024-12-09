import { BaseAgentti } from '../yhteiset/BaseAgentti';

export class MyynninKehitysAgentti extends BaseAgentti {
    constructor() {
        super('Myynnin Kehitys Agentti');
    }

    async luoKehityssuunnitelma(): Promise<any> {
        return {
            suunnitelma: 'Myynnin kehityssuunnitelma',
            toimenpiteet: []
        };
    }
}