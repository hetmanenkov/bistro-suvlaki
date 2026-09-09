const translations = {

    sk: {
        backToMenu: 'Späť na menu',

        creatorThanks:
            'Ďakujem, že ste si našli čas pozrieť si túto webovú stránku.',

        creatorText1:
            'Som rád, že sa Vám páči moja práca a že ste sa dostali až sem. Každá stránka je pre mňa malý projekt, ktorý sa snažím vytvoriť tak, aby pôsobil osobne, moderne a zároveň jednoducho.',

        creatorTitle:
            'Chcete vlastnú webstránku?',

        creatorText2:
            'Ak sa Vám páči tento dizajn alebo potrebujete webovú stránku pre svoju reštauráciu, firmu alebo vlastný projekt, rád Vám pomôžem.',

        creatorContact:
            'Pre spoluprácu ma môžete kontaktovať:'
    },

    en: {
        backToMenu: 'Back to menu',

        creatorThanks:
            'Thank you for taking the time to visit this website.',

        creatorText1:
            'I am glad that you like my work and that you made it this far. Every website is a small project for me, and I try to create each one so that it feels personal, modern and simple at the same time.',

        creatorTitle:
            'Would you like your own website?',

        creatorText2:
            'If you like this design or need a website for your restaurant, business or personal project, I would be happy to help.',

        creatorContact:
            'For cooperation, you can contact me:'
    },

    el: {
        backToMenu: 'Πίσω στο μενού',

        creatorThanks:
            'Ευχαριστώ που αφιερώσατε χρόνο για να επισκεφθείτε αυτή την ιστοσελίδα.',

        creatorText1:
            'Χαίρομαι που σας αρέσει η δουλειά μου και που φτάσατε μέχρι εδώ. Κάθε ιστοσελίδα είναι ένα μικρό έργο για μένα και προσπαθώ να τη δημιουργώ έτσι ώστε να είναι προσωπική, σύγχρονη και ταυτόχρονα απλή.',

        creatorTitle:
            'Θέλετε τη δική σας ιστοσελίδα;',

        creatorText2:
            'Αν σας αρέσει αυτός ο σχεδιασμός ή χρειάζεστε μια ιστοσελίδα για το εστιατόριό σας, την επιχείρησή σας ή το προσωπικό σας έργο, θα χαρώ να σας βοηθήσω.',

        creatorContact:
            'Για συνεργασία μπορείτε να επικοινωνήσετε μαζί μου:'
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