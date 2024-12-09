import { BaseAgentti } from '../yhteiset/BaseAgentti';

export class KampanjaManageri extends BaseAgentti {
    constructor() {
        super('Kampanja Manageri');
    }

    async hallitseKampanja(kampanjaTiedot: any): Promise<any> {
        return {
            kampanjanTila: 'aktiivinen',
            tulokset: []
        };
    }
}