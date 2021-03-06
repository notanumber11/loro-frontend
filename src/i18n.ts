import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LoroConf from "./LoroConf";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            // ProductHero
            "Learn new languages by browsing the web": "Learn new languages by browsing the web",
            "Short description": "The free Chrome extension that helps you learn a language without effort.",
            "Add to Chrome for free": "Add to Chrome for free",
            "Add to Chrome": "Add to Chrome",
            "I want to learn": "I want to learn:",
            "Loro explained": `
                                While browsing the web Loro will translate some words so
                                you can learn
                                a new language without effort.
                                Look at the words with a blue background and you will see that they are
                                in another language. Hover the mouse
                                over
                                them to see their translation.
                          `,
            // ProductHowItWorks
            "How it works": "How it works",
            "Install the browser extension for free.": "Install the browser extension for free.",
            "Choose the language you want to learn and the difficulty.": "Choose the language you want to learn and the difficulty.",
            "Browse as normal and start to learn!": "Browse as normal and start to learn!",
            // ProductOpinions
            "What other learners are saying": "What other learners are saying",
            "Reviews": "Reviews",
            "Caleb": `
                                    Loved the seamlessness of the chrome extension Loro. Responses and
                                    translations
                                    were pretty correct and apt. I am planning to visit Spain soon and Loro
                                    is
                                    definitely my language companion.
                                    `,
            "Armando": `
                                        It's a pretty original idea that allows to learn new words effortless. Its UI
                                        and design is also modern and eye-candy so it is really easy to use.
                                        `,
            "Anna": `
                                        Loro is so easy to use! I don't have much time every day to study Spanish, but this extension made it so easy to learn as I go about my daily
                                        online reading.
                                        `,
            // ProductContact
            "Contact": "Contact",
            "Contact us": "Contact us",
            "Got any questions? Need help?": "Got any questions? Need help?",
            "We are here to help. Get in touch!": "We are here to help. Get in touch!",

            // ProductReadyToLearn
            "Ready to learn?": "Ready to learn?",
            "Install for free and start learning a new language.": "Install for free and start learning a new language.",

            // Footer
            "Legal": "Legal",
            "Privacy": "Privacy",
            "Language": "Language",
            "Icons designed by": "Icons designed by",

            // OnBoarding:
            "Thanks for installing Loro!": "Thanks for installing Loro!",
            "You can close this tab and continue browsing": "You can close this tab and continue browsing",
            "You need to install Loro extension in order to perform the on-boarding!": "You need to install Loro extension in order to perform the on-boarding!",
        }
    },
    es: {
        translation: {
            // ProductHero
            "Learn new languages by browsing the web": "Aprende nuevos idiomas mientras navegas por la web",
            "Short description": "La extension gratuita de chrome que te ayuda a aprender un nuevo idioma sin esforzarte.",
            "Add to Chrome for free": "Añade a Chrome gratis",
            "Add to Chrome": "Añade a Chrome",
            "I want to learn": "Quiero aprender:",
            "Loro explained": `
                                 Mientras navegas la web Loro traducirá algunas palabras para que puedas aprender
                                 un nuevo idioma sin esfuerzo.
                                 Fijate en las palabras con fondo azul y veras que estan en otro idioma. Pasa el ratón por encima de
                                 ellas para ver su traducción.
                          `,
            // ProductHowItWorks
            "How it works": "Como funciona",
            "Install the browser extension for free.": "Instala la extension de forma gratuita.",
            "Choose the language you want to learn and the difficulty.": "Escoge el lenguage que quieres aprender y la dificultad.",
            "Browse as normal and start to learn!": "Navega por la web como siempre y empieza a aprender!",
            // ProductOpinions
            "What other learners are saying": "Que dicen nuestros usuarios",
            "Reviews": "Opiniones",
            "Caleb": `
                                    Me encanta lo rápido que funciona la extensión. Las traducciones son muy buenas.
                                    Estoy planeando visitar España pronto y Loro será mi compañero de aventuras.
                                    `,
            "Armando": `
                                        Es una idea muy original que te permite aprender nuevas palabras sin esfuerzo.
                                        Su interfaz y diseño son modernos y bonitos por lo que es muy fácil de usar.
                                        `,
            "Anna":
                `
                                        Una aplicación genial para aprender sin esfuerzo palabras en el idioma que elijas. 
                                        Loro hace que aprender nuevas palabras sea fácil y divertido. 
                                        Además permite cambiar el nivel de dificultad.
                                        Un extensión que vale la pena recomendar.
                                        `,
            // ProductContact
            "Contact": "Contacto",
            "Contact us": "Contactanos",
            "Got any questions? Need help?": "¿Tienes alguna pregunta? ¿Necesitas ayuda?",
            "We are here to help. Get in touch!": "Estamos aqui para ayudarte!",

            // ProductReadyToLearn
            "Ready to learn?": "¿Listo para aprender?",
            "Install for free and start learning a new language.": "Instala la extensión de forma gratuita y empieza a aprender un nuevo idioma.",

            // Footer
            "Legal": "Legal",
            "Privacy": "Privacidad",
            "Language": "Idioma",
            "Icons designed by": "Iconos diseñados por",

            // OnBoarding:
            "Thanks for installing Loro!": "Gracias por instalar Loro!",
            "You can close this tab and continue browsing": "Puedas cerrar esta pestaña y continuar navegando",
            "You need to install Loro extension in order to perform the on-boarding!": "Necesitas instalar Loro para realizar el tutorial de inicio.",
        }
    },
    pl: {
        translation: {
            // ProductHero
            "Learn new languages by browsing the web": "Ucz się nowych języków podczas surfowania w internecie",
            "Short description": "Darmowe rozszerzenie Google Chrome, które pomoże Ci nauczyć się nowego języka bez wysiłku",
            "Add to Chrome for free": "Dodaj do Chrome za darmo",
            "Add to Chrome": "Dodaj do Chrome",
            "I want to learn": "Chcę się uczyć:",
            "Loro explained":
                `
            Podczas przeglądania stron internetowych Loro automatycznie tłumaczy niektóre słowa, dzięki czemu uczysz się
            nowego języka bez żadnego wysiłku.
            Spójrz na słowa z niebieskim tłem, a zobaczysz że są one w innym języku. Najedź myszką na jedno ze słów,
            aby zobaczyć tłumaczenie.
            `,
            // ProductHowItWorks
            "How it works": "Jak to działa",
            "Install the browser extension for free.": "Zainstaluj rozszerzenie za darmo.",
            "Choose the language you want to learn and the difficulty.": "Wybierz język, którego chcesz się uczyć oraz poziom trudności.",
            "Browse as normal and start to learn!": "Przeglądaj strony internetowe, aby rozpocząć naukę!",
            // ProductOpinions
            "What other learners are saying": "Co inni użytkownicy mówią",
            "Reviews": "Opinie",
            "Caleb": `
        Uwielbiam jakość tego rozszerzenia dla Google Chrome. Tłumaczenia
        są poprawne i trafne. Planuję wkrótce odwiedzić Hiszpanię i Loro
        jest
        zdecydowanie moim towarzyszem językowym.
            `,
            "Armando": `
        Jest to dość oryginalny pomysł, który pozwala bez wysiłku nauczyć się nowych słów. Interfejs użytkownika
        i funkcjonalność jest nowoczesna i przyjemna dla oka, dzięki czemu Loro jest naprawdę łatwy w użyciu.
            `,
            "Anna": `
        Loro jest niezwykle łatwy w użyciu! Codziennie nie mam zbyt wiele czasu na naukę hiszpańskiego,
        ale to rozszerzenie sprawiło, że łatwo się uczę nowych słów podczas codziennych zajęć.
        `,
            // ProductContact
            "Contact": "Kontakt",
            "Contact us": "Skontaktuj się z nami",
            "Got any questions? Need help?": "Masz jakieś pytania? Potrzebujesz pomocy?",
            "We are here to help. Get in touch!": "Jesteśmy po to, aby pomóc.",

            // ProductReadyToLearn
            "Ready to learn?": "Gotowy do nauki?",
            "Install for free and start learning a new language.": "Zainstaluj darmową wtyczkę i zacznij uczyć się nowych języków.",

            // Footer
            "Legal": "Inne",
            "Privacy": "Prywatność",
            "Language": "Język",
            "Icons designed by": "Logo zaprojektowane przez",

            // OnBoarding:
            "Thanks for installing Loro!": "Dziękujemy za zainstalowanie Loro!",
            "You can close this tab and continue browsing": "Możesz zamknąć zakładkę i kontynuować sufrowanie w internecie",
            "You need to install Loro extension in order to perform the on-boarding!": "Zainstaluj rozszerzenie Loro, aby rozpocząć naukę!",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: LoroConf.getLanguage(),
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;