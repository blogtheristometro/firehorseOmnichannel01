export abstract class BaseAgentti {
    protected nimi: string;
    protected tila: 'aktiivinen' | 'odottaa' | 'valmis';

    constructor(nimi: string) {
        this.nimi = nimi;
        this.tila = 'odottaa';
    }

    getNimi(): string {
        return this.nimi;
    }

    getTila(): string {
        return this.tila;
    }

    protected async alusta(): Promise<void> {
        this.tila = 'aktiivinen';
    }

    protected async lopeta(): Promise<void> {
        this.tila = 'valmis';
    }
}