import { BaseAgentti } from '../yhteiset/BaseAgentti';
export declare class KampanjaManageri extends BaseAgentti {
    constructor();
    hallitseKampanja(kampanjaTiedot: any): Promise<any>;
}
