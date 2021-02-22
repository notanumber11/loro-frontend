export default class LoroConf {

    public meh:string;
    constructor() {
        this.meh = "caca"
    }
    public static readonly mapToTranslations = {
        "en": {
            "es": {
                "words": "palabras",
                "new": "nuevo",
                "another": "otro"
            }
        }
    };

    public static tWh(lan:string, word:string) {
        // @ts-ignore
        return this.mapToTranslations.en[lan][word];
    }

}

export {}