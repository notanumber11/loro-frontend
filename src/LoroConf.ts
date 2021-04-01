export default class LoroConf {

    public static readonly AVAILABLE_LANGUAGES: Map<string, Array<string>> = new Map([
        ["es", ["en", "fr", "it", "pl", "pt"]],
        ["en", ["es", "fr", "de"]],
        ["pl", ["en", "es", "de"]],
    ]);

    public static readonly LANGUAGE_CODE_TO_LANGUAGE: Map<string, string> = new Map([
        ["es", "Español"],
        ["en", "English"],
        ["fr", "Français"],
        ["it", "Italiano"],
        ["de", "Deutsch"],
        ["pl", "Polski"],
        ["pt", "Português"]
    ]);

    public static readonly mapToTranslations = {
        "en": {
            "words": ["words", "new", "another"],
            "es": {
                "words": "palabras",
                "new": "nuevo",
                "another": "otro"
            },
            "de": {
                "words": "wörter",
                "new": "neu",
                "another": "andere"
            },
            "fr": {
                "words": "mots",
                "new": "nouveau",
                "another": "autre"
            }
        },
        "es": {
            "words": ["palabras", "nuevo", "otro"],
            "en": {
                "palabras": "words",
                "nuevo": "new",
                "otro": "another"
            },
            "fr": {
                "palabras": "mots",
                "nuevo": "nouveau",
                "otro": "autre"
            },
            "it": {
                "palabras": "parole",
                "nuevo": "nuovo",
                "otro": "altro"
            },
            "pl": {
                "palabras": "słowa",
                "nuevo": "nowego",
                "otro": "innym"
            },
            "pt": {
                "palabras": "palavras",
                "nuevo": "novo",
                "otro": "outro"
            },
        },
        "pl": {
            "words": ["słowa", "nowego", "innym"],
            "es": {
                "słowa": "palabras",
                "nowego": "nuevo",
                "innym": "otro"
            },
            "de": {
                "słowa": "wörter",
                "nowego": "neu",
                "innym": "andere"
            },
            "en": {
                "słowa": "words",
                "nowego": "nouveau",
                "innym": "autre"
            }
        },
    };

    private static language = null;

    public static getAvailableLanguagesToLearn():Array<string> {
        // @ts-ignore
        return LoroConf.AVAILABLE_LANGUAGES.get(LoroConf.getLanguage());
    }

    public static setLanguage(lan:string) {
        // @ts-ignore
        LoroConf.language = lan;
    }

    public static getLanguage(): string {
        if (LoroConf.language == null) {
            let browserLanguage = window.navigator.language;
            if (browserLanguage == null) {
                return "en";
            }
            browserLanguage = browserLanguage.toLowerCase();
            if(browserLanguage.includes("es")) {
                browserLanguage = "es";
            }
            else if (browserLanguage.includes("en")) {
                browserLanguage = "en";
            }
            LoroConf.setLanguage(browserLanguage);
        }
        // @ts-ignore
        return LoroConf.language.toString();
    }

    public static getWordsToTranslate(lanSrc:string) {
        try {
            // @ts-ignore
            return this.mapToTranslations[lanSrc]["words"];
        } catch (e) {
            console.error("Problems retriving words to translate for mother tongue=", lanSrc);
        }
        return []
    }

    public static replaceWord(lanSrc:string, lanDst:string, word:string) {
        console.log("Replacing word...");
        // @ts-ignore
        return this.mapToTranslations[lanSrc][lanDst][word];
    }

}

export {}