const translations = {

    sk: {
        backToMenu: 'Späť na menu',
        cateringTitle: 'Catering',

        cateringText1:
            'Ponúkame catering s tradičnými gréckymi jedlami pre oslavy, firemné podujatia a rôzne spoločenské akcie.',

        cateringText2:
            'Radi pre vás pripravíme grécke špeciality podľa vašich predstáv a počtu hostí.',

        cateringContact: 'Kontaktujte nás',

        cateringPhone: '📞 +421 950 651 469'
    },

    en: {
        backToMenu: 'Back to menu',
        cateringTitle: 'Catering',

        cateringText1:
            'We offer catering with traditional Greek dishes for celebrations, corporate events and various social occasions.',

        cateringText2:
            'We will be happy to prepare Greek specialities according to your preferences and the number of guests.',

        cateringContact: 'Contact us',

        cateringPhone: '📞 +421 950 651 469'
    },

    el: {
        backToMenu: 'Πίσω στο μενού',
        cateringTitle: 'Catering',

        cateringText1:
            'Προσφέρουμε catering με παραδοσιακά ελληνικά πιάτα για γιορτές, εταιρικές εκδηλώσεις και διάφορες κοινωνικές εκδηλώσεις.',

        cateringText2:
            'Με χαρά θα ετοιμάσουμε ελληνικές σπεσιαλιτέ σύμφωνα με τις προτιμήσεις σας και τον αριθμό των καλεσμένων.',

        cateringContact: 'Επικοινωνήστε μαζί μας',

        cateringPhone: '📞 +421 950 651 469'
    }

};


function setLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {

        const key = element.dataset.i18n;

        if (t[key]) {
            element.textContent = t[key];
        }

    });

    document.querySelectorAll('.language-btn').forEach(button => {

        button.classList.toggle(
            'active',
            button.dataset.lang === lang
        );

    });

    localStorage.setItem('language', lang);

}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.language-btn').forEach(button => {

        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });

    });

    setLanguage(
        localStorage.getItem('language') || 'sk'
    );

});