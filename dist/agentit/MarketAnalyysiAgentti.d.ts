import { BaseAgentti } from '../yhteiset/BaseAgentti';
export declare class MarketAnalyysiAgentti extends BaseAgentti {
    constructor();
    analysoimarkkinat(markkinaData: any): Promise<any>;
}
