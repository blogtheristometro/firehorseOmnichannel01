import { BaseAgentti } from '../yhteiset/BaseAgentti';

export class LiidiManageri extends BaseAgentti {
    constructor() {
        super('Liidi Manageri');
    }

    async kasitteleliidi(liidiData: any): Promise<any> {
        return {
            liidiStatus: 'käsitelty',
            toimenpiteet: []
        };
    }
}