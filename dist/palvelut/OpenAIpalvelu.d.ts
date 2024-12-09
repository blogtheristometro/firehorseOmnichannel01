export declare class OpenAIpalvelu {
    private apiAvain;
    constructor(apiAvain: string);
    alustaAI(): Promise<void>;
    harjoitaMalli(data: any): Promise<void>;
}
