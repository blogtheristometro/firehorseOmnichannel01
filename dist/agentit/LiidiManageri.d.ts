import { BaseAgentti } from '../yhteiset/BaseAgentti';
export declare class LiidiManageri extends BaseAgentti {
    constructor();
    kasitteleliidi(liidiData: any): Promise<any>;
}
