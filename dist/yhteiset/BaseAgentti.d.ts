export declare abstract class BaseAgentti {
    protected nimi: string;
    protected tila: 'aktiivinen' | 'odottaa' | 'valmis';
    constructor(nimi: string);
    getNimi(): string;
    getTila(): string;
    protected alusta(): Promise<void>;
    protected lopeta(): Promise<void>;
}
