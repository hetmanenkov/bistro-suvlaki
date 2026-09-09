console.log('ALLERGENS JS ЗАГРУЗИЛСЯ');
const translations = {
    sk: {
        backToMenu: 'Späť na menu',
        allergensTitle: 'Alergény',
        allergensIntro:
            'Informácie o alergénoch obsiahnutých v jednotlivých jedlách nájdete pri každej položke v našom menu.',

        allergen1: 'Obilniny obsahujúce lepok',
        allergen2: 'Kôrovce a výrobky z nich',
        allergen3: 'Vajcia a výrobky z nich',
        allergen4: 'Ryby a výrobky z nich',
        allergen5: 'Arašidy a výrobky z nich',
        allergen6: 'Sója a výrobky z nej',
        allergen7: 'Mlieko a výrobky z neho',
        allergen8: 'Orechy',
        allergen9: 'Zeler a výrobky z neho',
        allergen10: 'Horčica a výrobky z nej',
        allergen11: 'Sezamové semená a výrobky z nich',
        allergen12: 'Oxid siričitý a siričitany',
        allergen13: 'Vlčí bôb a výrobky z neho',
        allergen14: 'Mäkkýše a výrobky z nich'
    },

    en: {
        backToMenu: 'Back to menu',
        allergensTitle: 'Allergens',
        allergensIntro:
            'Information about allergens contained in individual dishes can be found next to each item in our menu.',

        allergen1: 'Cereals containing gluten',
        allergen2: 'Crustaceans and products thereof',
        allergen3: 'Eggs and products thereof',
        allergen4: 'Fish and products thereof',
        allergen5: 'Peanuts and products thereof',
        allergen6: 'Soybeans and products thereof',
        allergen7: 'Milk and products thereof',
        allergen8: 'Nuts',
        allergen9: 'Celery and products thereof',
        allergen10: 'Mustard and products thereof',
        allergen11: 'Sesame seeds and products thereof',
        allergen12: 'Sulphur dioxide and sulphites',
        allergen13: 'Lupin and products thereof',
        allergen14: 'Molluscs and products thereof'
    },

    el: {
        backToMenu: 'Πίσω στο μενού',
        allergensTitle: 'Αλλεργιογόνα',
        allergensIntro:
            'Πληροφορίες σχετικά με τα αλλεργιογόνα που περιέχονται στα επιμέρους πιάτα θα βρείτε δίπλα σε κάθε επιλογή του μενού μας.',

        allergen1: 'Δημητριακά που περιέχουν γλουτένη',
        allergen2: 'Καρκινοειδή και προϊόντα τους',
        allergen3: 'Αυγά και προϊόντα τους',
        allergen4: 'Ψάρια και προϊόντα τους',
        allergen5: 'Αράπικα φιστίκια και προϊόντα τους',
        allergen6: 'Σόγια και προϊόντα της',
        allergen7: 'Γάλα και προϊόντα του',
        allergen8: 'Ξηροί καρποί',
        allergen9: 'Σέλινο και προϊόντα του',
        allergen10: 'Μουστάρδα και προϊόντα της',
        allergen11: 'Σπόροι σησαμιού και προϊόντα τους',
        allergen12: 'Διοξείδιο του θείου και θειώδη',
        allergen13: 'Λούπινο και προϊόντα του',
        allergen14: 'Μαλάκια και προϊόντα τους'
    }
};


let currentLanguage = localStorage.getItem('language') || 'sk';

function setLanguage(lang) {
    const t = translations[lang];

    if (!t) return;

    currentLanguage = lang;

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

    setLanguage(currentLanguage);

});