export interface AgenttiData {
    nimi: string;
    tila: 'aktiivinen' | 'odottaa' | 'valmis';
}

export interface AnalyysiTulos {
    analyysi: string;
    suositukset: string[];
}

export interface KampanjaTulos {
    kampanjanTila: string;
    tulokset: any[];
}

export interface LiidiTulos {
    liidiStatus: string;
    toimenpiteet: any[];
}

export interface MarkkinaAnalyysiTulos {
    markkinaAnalyysi: string;
    trendit: any[];
}

export interface KehityssuunnitelmaTulos {
    suunnitelma: string;
    toimenpiteet: any[];
}