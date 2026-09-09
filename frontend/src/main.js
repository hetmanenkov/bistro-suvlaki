
import { supabase } from './supabase.js'
const translations = {
    sk: {
        about: 'O nás',
        catering: 'Catering',
        location: 'Kde nás nájdete',
        contact: 'Kontakt',
        wolt: 'Objednajte si nás na Wolt',
        owner: 'Administrácia',
        creator: 'Web vytvoril',

        dailyMenu: 'Denné Menu',
        promotion: 'AKCIA',
        mapButton: 'Otvoriť v Google Maps',
        address: '📍 Krížna 8, Bratislava, Slovensko',
openingHours: '🕐 Pondelok – Sobota: 11:00 – 22:00',
phone: '📞 Telefón: +421 918 286 414',
email: '✉️ E-mail: bistrosuvlaki@gmail.com',
pitaInfo: 'Všetky pity sú plnené tzatziki, paradajkou, cibuľkou a hranolkami. FIT VERZIA: hranolky môžete vymeniť za šalát.',
plateInfo: 'Každé jedlo z tejto kategórie podávame s hranolkami, tzatziki, paradajkou, cibuľkou a pita chlebom. FIT VERZIA: hranolky a pita chlieb vám radi vymeníme za šalát.',
allergens: 'Alergény',
allergensPage: 'Alergény',
catPredjedla: 'Predjedlá',
catNatierky: 'Nátierky',
catSalaty: 'Šaláty',
catPita: 'Pita menu',
catPlate: 'Grécko na tanieri',
catFish: 'Ryby a plody mora',
catDesserts: 'Dezerty',
catDrinks: 'Nápoje',
    },

    en: {
        about: 'About us',
        catering: 'Catering',
        location: 'Where to find us',
        contact: 'Contact',
        wolt: 'Order us on Wolt',
        owner: 'Administration',
        creator: 'Website created by',

        dailyMenu: 'Daily Menu',
        promotion: 'SPECIAL OFFER',
        mapButton: 'Open in Google Maps',
        address: '📍 Krížna 8, Bratislava, Slovakia',
openingHours: '🕐 Monday – Saturday: 11:00 – 22:00',
phone: '📞 Phone: +421 918 286 414',
email: '✉️ E-mail: bistrosuvlaki@gmail.com',
pitaInfo: 'All pitas are filled with tzatziki, tomato, onion and fries. FIT VERSION: fries can be replaced with salad.',
plateInfo: 'Each dish from this category is served with fries, tzatziki, tomato, onion and pita bread. FIT VERSION: fries and pita bread can be replaced with salad.',
allergens: 'Allergens',
allergensPage: 'Allergens',
catPredjedla: 'Starters',
catNatierky: 'Spreads',
catSalaty: 'Salads',
catPita: 'Pita menu',
catPlate: 'Greece on a plate',
catFish: 'Fish & Seafood',
catDesserts: 'Desserts',
catDrinks: 'Drinks',
    },

    el: {
        about: 'Σχετικά με εμάς',
        catering: 'Catering',
        location: 'Πού θα μας βρείτε',
        contact: 'Επικοινωνία',
        wolt: 'Παραγγείλτε μας στο Wolt',
        owner: 'Διαχείριση',
        creator: 'Ιστοσελίδα από',
        dailyMenu: 'Ημερήσιο Μενού',
        promotion: 'ΠΡΟΣΦΟΡΑ',
        mapButton: 'Άνοιγμα στο Google Maps',
        address: '📍 Krížna 8, Μπρατισλάβα, Σλοβακία',
openingHours: '🕐 Δευτέρα – Σάββατο: 11:00 – 22:00',
phone: '📞 Τηλέφωνο: +421 918 286 414',
email: '✉️ E-mail: bistrosuvlaki@gmail.com',
pitaInfo: 'Όλες οι πίτες περιέχουν τζατζίκι, ντομάτα, κρεμμύδι και πατάτες. FIT ΕΚΔΟΣΗ: οι πατάτες μπορούν να αντικατασταθούν με σαλάτα.',
plateInfo: 'Κάθε πιάτο αυτής της κατηγορίας σερβίρεται με πατάτες, τζατζίκι, ντομάτα, κρεμμύδι και πίτα. FIT ΕΚΔΟΣΗ: οι πατάτες και η πίτα μπορούν να αντικατασταθούν με σαλάτα.',
allergens: 'Αλλεργιογόνα',
allergensPage: 'Αλλεργιογόνα',
catPredjedla: 'Ορεκτικά',
catNatierky: 'Αλοιφές',
catSalaty: 'Σαλάτες',
catPita: 'Μενού πίτας',
catPlate: 'Η Ελλάδα στο πιάτο',
catFish: 'Ψάρια & θαλασσινά',
catDesserts: 'Επιδόρπια',
catDrinks: 'Ποτά',
    }
};
let currentLanguage = localStorage.getItem('language') || 'sk';



const menuData = [
  // PREDJEDLÁ
  {
    id: 1,
    category: 'Predjedlá',
    name: 'Pita chlieb',
    price: '1.30 €',
    description: 'Tradičný grécky pita chlieb.',
    Image:"/menu/pita.jpg"
  },
  {
    id: 2,
    category: 'Predjedlá',
    name: 'Vyprážaný baklažán s tzatziki dipom',
    price: '5.40 €',
    description: 'Vyprážaný baklažán podávaný s tzatziki dipom.',
    Image:"/menu/Vyprážaný baklažán s tzatziki dipom.avif"
  },
  {
    id: 3,
    category: 'Predjedlá',
    name: 'Tirokroketes',
    price: '5.50 €',
    description: 'Vyprážané syrové guľôčky.',
    Image:"/menu/Tirokroketes.webp"
  },
  {
    id: 4,
    category: 'Predjedlá',
    name: 'Feta psiti',
    price: '5.50 €',
    description: 'Grilovaný syr feta s paradajkami a oreganom.',
    Image:"/menu/Feta psiti.avif"
  },
  {
    id: 5,
    category: 'Predjedlá',
    name: 'Tiropitakia',
    price: '5.50 €',
    description: 'Pečené lístkové cesto plnené syrom feta, medom a sezamom.',
    Image:"/menu/Tiropitakia.jpeg"
  },
  {
    id: 6,
    category: 'Predjedlá',
    name: 'Dolmadakia',
    price: '5.20 €',
    description: 'Vínne listy plnené ryžou.',
    Image:"/menu/Dolmadakia.avif"
  },
  {
    id: 7,
    category: 'Predjedlá',
    name: 'Hranolky z čerstvých zemiakov',
    price: '3.80 €',
    description: 'Domáce grécke hranolky z čerstvých zemiakov.',
    Image:"/menu/Hran.png"
  },
  {
    id: 8,
    category: 'Predjedlá',
    name: 'Grilovaná červená paprika plnená fetou',
    price: '5.40 €',
    description: 'Grilovaná červená paprika plnená syrom feta.',
    Image:"/menu/paprika.avif"
  },
  {
    id: 9,
    category: 'Predjedlá',
    name: 'Vyprážaná cuketa',
    price: '5.20 €',
    description: 'Chrumkavá vyprážaná cuketa.',
    Image:"/menu/Vyprážaná CUKETA.avif"
  },
  {
    id: 10,
    category: 'Predjedlá',
    name: 'Pikilia Orektikon',
    price: '10.60 €',
    description: 'Mix najlepších predjedál.',
    Image:"/menu/Pikilia Orektikon.jpg"
  },
  {
    id: 11,
    category: 'Predjedlá',
    name: 'Pikilia Kreta',
    price: '10.60 €',
    description: 'Mix tradičných krétskych predjedál.',
    Image:"/menu/Pikilia Kreta.avif"
  },

  
  // NÁTERKY
  {
    id: 12,
    category: 'Nátierky',
    name: 'Tzatziki',
    price: '4.90 €',
    description: 'Grécky jogurt s uhorkou a cesnakom.',
    Image:"/menu/Tzaziky.avif"
  },
  {
    id: 13,
    category: 'Nátierky',
    name: 'Syrová nátierka',
    price: '4.90 €',
    description: 'Tradičná grécka syrová nátierka.',
    Image:"/menu/Tzaziky.avif"
  },
  {
    id: 14,
    category: 'Nátierky',
    name: 'Baklažánová nátierka',
    price: '4.90 €',
    description: 'Nátierka z pečeného baklažánu.',
    Image:"/menu/Baklažanová.avif"
  },
  {
    id: 15,
    category: 'Nátierky',
    name: 'Hummus',
    price: '4.90 €',
    description: 'Tradičná nátierka z cíceru.',
    Image:"/menu/hummus.avif"
  },
  {
    id: 16,
    category: 'Nátierky',
    name: 'Taramas',
    price: '4.90 €',
    description: 'Grécka rybacia nátierka z rybích ikier.',
    Image:"/menu/taramas.png"
  },

  // ŠALÁTY
  {
    id: 17,
    category: 'Šaláty',
    name: 'Grécky šalát – Choriatiki so syrom Feta',
    price: '8.20 €',
    description: 'Grécky šalát so syrom feta.',
    Image:"/menu/grecky salat.webp"
  },
  {
    id: 18,
    category: 'Šaláty',
    name: 'Grécky šalát so syrom Halloumi',
    price: '9.70 €',
    description: 'Grécky šalát s grilovaným syrom Halloumi.',
    Image:"menu/chalumi salat.png"
  },
  {
    id: 19,
    category: 'Šaláty',
    name: 'Kréta šalát',
    price: '8.30 €',
    description: 'Grécky šalát so suchármi Dakos z ostrova Kréta.',
    Image:"/menu/Kréta šalát.avif"
  },
  {
    id: 20,
    category: 'Šaláty',
    name: 'Cézar šalát',
    price: '7.40 €',
    description: 'Zelený šalát s kuracím gyros mäsom a domácim dresingom.',
    Image:"/menu/Cezar šalát.avif"
  },
  {
    id: 21,
    category: 'Šaláty',
    name: 'Dakos',
    price: '5.60 €',
    description: 'Krétsky suchár s paradajkami, fetou a bylinkami.',
    Image:"/menu/dakos.webp"
  },
  {
    id: 22,
    category: 'Šaláty',
    name: 'Chorta',
    price: '6.90 €',
    description: 'Varená divoká zelenina s extra panenským olivovým olejom a čerstvou citrónovou šťavou.',
    Image:"/menu/chorta.jpg"
  },
  {
    id: 23,
    category: 'Šaláty',
    name: 'Olivy',
    price: '5.10 €',
    description: 'Grécke olivy.',
    Image:"/menu/Olivy.avif"
  },
  {
    id: 24,
    category: 'Šaláty',
    name: 'Grilovaný syr Halloumi s rukolou',
    price: '7.80 €',
    description: 'Grilovaný syr Halloumi podávaný s čerstvou rukolou.',
    Image:"/menu/chalumi grill.jpg"
  },
  {
    id: 25,
    category: 'Šaláty',
    name: 'Syr Feta',
    price: '5.90 €',
    description: 'Tradičný grécky syr feta.',
    Image:"/menu/feta.jpg"
  },
  // PITA
  {
    id: 26,
    category: 'Pita menu',
    name: 'Pita Gyros Chirinos',
    price: '5.50 €',
    description: 'Pita plnená bravčovým gyrosom, tzatziki, paradajkami, cibuľou a hranolkami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 27,
    category: 'Pita menu',
    name: 'Pita Gyros Kotopulo',
    price: '5.50 €',
    description: 'Pita plnená kuracím gyrosom, tzatziki, paradajkami, cibuľou a hranolkami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 28,
    category: 'Pita menu',
    name: 'Pita Souvlaki Chirino',
    price: '5.70 €',
    description: 'Pita plnená bravčovým souvlaki, tzatziki, paradajkami, cibuľou a hranolkami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 29,
    category: 'Pita menu',
    name: 'Pita Souvlaki Kotopulo',
    price: '5.70 €',
    description: 'Pita plnená kuracím souvlaki, tzatziki, paradajkami, cibuľou a hranolkami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 30,
    category: 'Pita menu',
    name: 'Pita Souvlaki Arni',
    price: '6.50 €',
    description: 'Pita plnená jahňacím souvlaki, tzatziki, paradajkami, cibuľou a hranolkami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 31,
    category: 'Pita menu',
    name: 'Pita so syrom Halloumi',
    price: '5.90 €',
    description: 'Pita plnená grilovaným syrom Halloumi.',
    Image:"/menu/pita veg.avif"
  },
  {
    id: 32,
    category: 'Pita menu',
    name: 'Pita so syrom Feta',
    price: '5.90 €',
    description: 'Pita plnená syrom feta.',
    Image:"/menu/pita veg.avif"
  },
  {
    id: 33,
    category: 'Pita menu',
    name: 'Pita krevetová',
    price: '6.50 €',
    description: 'Pita plnená grilovanými krevetami.',
    Image:"/menu/pita gyros.avif"
  },
  {
    id: 34,
    category: 'Pita menu',
    name: 'Pita bifteky jahňacie',
    price: '6.50 €',
    description: 'Pita plnená jahňacím bifteki.',
    Image:"/menu/pita kebap.avif"
  },
  {
    id: 35,
    category: 'Pita menu',
    name: 'Pita chobotnica grilovaná',
    price: '7.50 €',
    description: 'Pita plnená grilovanou chobotnicou.',
    Image:"/menu/pita chobotnica.png"
  },


  // Grécko na tanieri
  {
    id: 36,
    category: 'Grécko na tanieri',
    name: 'Gyros tanier Chirinos',
    price: '9.80 €',
    description: 'Nárezané bravčové gyros mäso, 300g.',
    Image:"/menu/gtb.png"
  },
  {
    id: 37,
    category: 'Grécko na tanieri',
    name: 'Gyros tanier Kotopulo',
    price: '9.80 €',
    description: 'Nárezané kuracie gyros mäso, 300 g.',
    Image:"/menu/gtk.png"
  },
  {
    id: 38,
    category: 'Grécko na tanieri',
    name: 'Souvlaki kuracie porcia',
    price: '10.50 €',
    description: 'Tri kuracie špízy, 300 g.',
    Image:"/menu/Suvlaki kuracie porcia.avif"
  },

   {
  id: 39,
  category: 'Grécko na tanieri',
  name: 'Souvlaki bravčové porcia',
  price: '10.50 €',
  description: 'Tri bravčové špízy, 300 g.',
  Image:"/menu/Suvlaki bravčové porcia.avif"
},
{
  id: 40,
  category: 'Grécko na tanieri',
  name: 'Souvlaki jahňacie porcia',
  price: '13.80 €',
  description: 'Tri jahňacie špízy, 300 g.',
  Image:"/menu/Suvlaki bravčové porcia.avif"
},
{
  id: 41,
  category: 'Grécko na tanieri',
  name: 'Souvlaki mix porcia',
  price: '12.70 €',
  description: 'Mix bravčového, kuracieho a jahňacieho souvlaki, 300 g.',
  Image:"/menu/suvlaki mix.png"
},
{
  id: 42,
  category: 'Grécko na tanieri',
  name: 'Souvlaki so syrom Halloumi porcia',
  price: '11.40 €',
  description: 'Tri špízy so syrom Halloumi, 300 g.',
  Image:"/menu/SUVLAKI zo SYRA CHALUMI.avif"
},
{
  id: 43,
  category: 'Grécko na tanieri',
  name: 'Bifteky Jemisto – plnené syrom Feta',
  price: '11.20 €',
  description: 'Grécke bravčové bifteki plnené syrom feta, 300 g.',
  Image:"/menu/Bifteky jemisto.avif"
},
{
  id: 44,
  category: 'Grécko na tanieri',
  name: 'Grilované grécke klobásky s bylinkami',
  price: '9.80 €',
  description: 'Grilované grécke klobásky ochutené stredomorskými bylinkami, 200 g.',
  Image:"/menu/KLOBÁSKY.avif"
},
{
  id: 45,
  category: 'Grécko na tanieri',
  name: 'Bifteky jahňacie porcia',
  price: '13.80 €',
  description: 'Grilované jahňacie bifteki, 200 g.',
  Image:"menu/bifteky-jahnacie.pngf"
},
{
  id: 46,
  category: 'Grécko na tanieri',
  name: 'Britzola – grilovaná bravčová kotleta',
  price: '16.50 €',
  description: 'Grilovaná bravčová kotleta, 200 g.',
  Image:"/menu/britzola.jpg"
},
{
  id: 47,
  category: 'Grécko na tanieri',
  name: 'Pita Fan',
  price: '12.10 €',
  description: 'Pečená pita s bravčovým alebo kuracím gyrosom, slaninkou, syrom, paradajkami, šalátom, cibuľou, majonézovým dresingom a hranolkami.',
  Image:"/menu/pitafan.avif"
},
{
  id: 48,
  category: 'Grécko na tanieri',
  name: 'Arni paidakia – grilované jahňacie kotlety',
  price: '18.80 €',
  description: 'Grilované jahňacie kotlety, 300 g.',
  Image:"/menu/arni pajdakia.jpg"
},
{
  id: 49,
  category: 'Grécko na tanieri',
  name: 'Pikilia Kreaton – mix najlepšieho mäsa',
  price: '19.90 €',
  description: 'Mix kuracieho a bravčového souvlaki, klobásky, bifteki a gyrosu.',
  Image:"/menu/mix masa.png"
  },

  // RYBY A PLODY MORA
  {
    id: 50,
    category: 'Ryby a plody mora',
    name: 'Vyprážané rybky Gavros',
    price: '9.20 €',
    description: 'Vyprážané malé rybky Gavros, 200 g.',
    Image:"/menu/Gavros.avif"
  },
  {
    id: 51,
    category: 'Ryby a plody mora',
    name: 'Vyprážané rybky Atherina',
    price: '9.20 €',
    description: 'Vyprážané malé rybky Atherina, 200 g.',
    Image:"/menu/Atherina.avif"
  },
  {
    id: 52,
    category: 'Ryby a plody mora',
    name: 'Kalamáre vyprážané',
    price: '11.40 €',
    description: 'Vyprážané kalamáre, 200 g.',
    Image:"/menu/kalamare vypr.png"
  },
  {
    id: 53,
    category: 'Ryby a plody mora',
    name: 'Kalamáre grilované',
    price: '11.40 €',
    description: 'Grilované kalamáre, 200 g.',
    Image:"/menu/Kalamáre grilované.avif"
  },
  {
    id: 54,
    category: 'Ryby a plody mora',
    name: 'Garides Saganaki',
    price: '11.20 €',
    description: 'Krevety v paradajkovej omáčke so syrom feta, 200 g.',
    Image:"/menu/Garides saganaki.avif"
  },
  {
    id: 55,
    category: 'Ryby a plody mora',
    name: 'Ryba podľa dnešného úlovku od nášho šéfkuchára',
    price: '18.90 €',
    description: 'Ryba podľa dnešného úlovku, miešaný šalát, 300 g.',
    Image:"menu/den ulov.png"
  },
  {
    id: 56,
    category: 'Ryby a plody mora',
    name: 'Grilovaná chobotnica',
    price: '19.60 €',
    description: 'Grilovaná chobotnica, 200 g.',
    Image:"/menu/chobotnica.avif"
  },
  {
    id: 57,
    category: 'Ryby a plody mora',
    name: 'Rybací mix pre 2 osoby',
    price: '59.90 €',
    description: 'Mix rýb Gavros, Atherina, chobotnica, vyprážané a grilované kalamáre, krevety a souvlaki z morských plodov, podávaný s gréckym šalátom.',
    Image:"/menu/Rybací mix.avif"
  },

  // DEZERTY
  {
    id: 58,
    category: 'Dezerty',
    name: 'Galaktoburiko',
    price: '4.80 €',
    description: 'Tradičný grécky dezert z lístkového cesta plnený krémom.',
    Image:"/menu/GALAKTOBURIKO.jpg"
  },
  {
    id: 59,
    category: 'Dezerty',
    name: 'Baklava',
    price: '4.80 €',
    description: 'Tradičný grécky dezert z lístkového cesta, orechov a sladkého sirupu.',
    Image:"/menu/BAKLAVA.jpg"
  },
  {
    id: 60,
    category: 'Dezerty',
    name: 'Kantaifi',
    price: '4.80 €',
    description: 'Tradičný grécky dezert z jemného cesta s orechmi a sladkým sirupom.',
    Image:"/menu/KANTAIFI.jpg"
  },
  {
    id: 61,
    category: 'Dezerty',
    name: 'Dezert Viagra',
    price: '4.80 €',
    description: 'Špeciálny grécky dezert.',
    Image:"/menu/viagra.png"
  },
  {
    id: 62,
    category: 'Dezerty',
    name: 'Dezert Dňa',
    price: '4.80 €',
    description: 'Dezert podľa aktuálnej ponuky.',
    Image:"/menu/dod.png"
  },

  // NÁPOJE
  {
    id: 63,
    category: 'Nápoje',
    name: 'Pepsi / Mirinda / Sprite 0,33 l',
    price: '2.70 €',
    description: 'Nealkoholický sýtený nápoj, 0,33 l.',
    Image:"/menu/pepsi.avif"
  },
  {
    id: 64,
    category: 'Nápoje',
    name: 'Minerálna voda 0,5 l',
    price: '2.70 €',
    description: 'Minerálna voda, perlivá alebo neperlivá, 0,5 l.',
    Image:"/menu/voda.jpg"
  },
  {
    id: 65,
    category: 'Nápoje',
    name: 'Retsina 0,5 l',
    price: '4.80 €',
    description: 'Tradičné grécke víno Retsina, 0,5 l.',
    Image:"/menu/retsina.jpg"
  },
  {
    id: 66,
    category: 'Nápoje',
    name: 'Grécke biele / červené víno 0,18 l',
    price: '4.40 €',
    description: 'Grécke biele alebo červené víno, 0,18 l.',
    Image:"/menu/vino.png"
  },
  {
    id: 67,
    category: 'Nápoje',
    name: 'Grécke pivo Mythos 0,35 l',
    price: '3.20 €',
    description: 'Tradičné grécke pivo Mythos, 0,35 l.',
    Image:"/menu/pivo.jpg"
  },
  {
    id: 68,
    category: 'Nápoje',
    name: 'Grécke malinovky Loux 0,25 l',
    price: '2.90 €',
    description: 'Tradičné grécke nealkoholické nápoje Loux, 0,25 l.',
    Image:"/menu/loux.avif"
  }
];
const buttons = document.querySelectorAll('.tab-btn');
buttons.forEach(button => {
    button.style.width = `${button.offsetWidth}px`;
});
const container = document.getElementById('menu-container');
const announcementContainer = document.getElementById('announcement');
function rendermenu(items) {
  // 1. Находим все уникальные категории
  
const categories = [
    ...new Set(
        items
            .map(item => item.category)
            .filter(category => category)
    )
];

categories.sort((a, b) => {
    if (a === 'Denné Menu') return -1;
    if (b === 'Denné Menu') return 1;
    return 0;
});
  // 2. Создаем отдельную секцию с заголовком для каждой категории
  const html = categories
    .map(category => {
      const categoryItems = items.filter(item => item.category === category);
      
      // Имена секций формируются правильно с обратными кавычками
      const sectionId = `category-${category.replace(/ /g, '-')}`;

     return `
<section id="${sectionId}" class="menu-section">
   <h2 class="category-title">
    ${
        category === 'Denné Menu'
            ? translations[currentLanguage].dailyMenu
            : category === 'Predjedlá'
                ? translations[currentLanguage].catPredjedla
                : category === 'Nátierky'
                    ? translations[currentLanguage].catNatierky
                    : category === 'Šaláty'
                        ? translations[currentLanguage].catSalaty
                        : category === 'Pita menu'
                            ? translations[currentLanguage].catPita
                            : category === 'Grécko na tanieri'
                                ? translations[currentLanguage].catPlate
                                : category === 'Ryby a plody mora'
                                    ? translations[currentLanguage].catFish
                                    : category === 'Dezerty'
                                        ? translations[currentLanguage].catDesserts
                                        : category === 'Nápoje'
                                            ? translations[currentLanguage].catDrinks
                                            : category
    }
</h2>
    ${category === 'Pita menu' ? `
    <p class="category-info">
        ${translations[currentLanguage].pitaInfo}
    </p>
` : ''}

${category === 'Grécko na tanieri' ? `
    <p class="category-info">
        ${translations[currentLanguage].plateInfo}
    </p>
` : ''}

   <div class="menu-grid">

    ${categoryItems
      .map(item =>
   item.is_daily_menu
          ? `
            <div class="daily-menu-card"
                 data-image="${item.Image}"
                 data-name="${translations[currentLanguage].dailyMenu}"
                 data-description=""
                 data-price="">

                <img
                    src="${item.Image}"
                    alt="${translations[currentLanguage].dailyMenu}"
                >

            </div>
          `
          : `
            <div class="menu-card"
                 data-image="${item.Image}"
                 data-name="${item.name}"
                 data-description="${item.description}"
data-allergens="${item.allergens || ''}"
data-price="${item.price}">

                <div class="menu-image">
                    <img
                        src="${item.Image}"
                        alt="${item.name}"
                    >
                </div>

                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>

                   ${item.allergens
    ? `<p class="allergens">
        ${translations[currentLanguage].allergens}: ${item.allergens}
       </p>`
    : ''
}

                    <span class="price">${item.price}</span>
                </div>

            </div>
          `
      )
      .join('')}

</div>
      </section>
    `;
    })
    .join('');

  container.innerHTML = html;
}



// Загружаем меню из Supabase
async function loadMenu() {
  console.log('LOAD MENU ЗАПУСТИЛСЯ');
  const { data, error } = await supabase
    .from('menu')
    .select('*')
    .eq('available', true)
    .order('id');
    console.log('ДАННЫЕ ИЗ SUPABASE:', data);
console.log('ОШИБКА SUPABASE:', error);

  if (error) {
    console.error('Ошибка загрузки меню:', error);
    container.innerHTML = '<p>Не удалось загрузить меню.</p>';
    return;
  }
const items = data.map(item => {

    let name = item.name;
    let description = item.description;

    if (currentLanguage === 'en') {
        name = item.name_en || item.name;
        description = item.description_en || item.description;
    }

    if (currentLanguage === 'el') {
        name = item.name_el || item.name;
        description = item.description_el || item.description;
    }

    return {
        ...item,
        name,
        description,
        Image: item.image,
        price: `${Number(item.price).toFixed(2)} €`
    };
});

  rendermenu(items);
const dailySection = document.getElementById('category-Denné-Menu');

if (dailySection && announcementContainer) {

    let dailyAndAnnouncement =
        document.querySelector('.daily-and-announcement');

    if (!dailyAndAnnouncement) {
        dailyAndAnnouncement = document.createElement('div');
        dailyAndAnnouncement.className = 'daily-and-announcement';

        dailySection.parentNode.insertBefore(
            dailyAndAnnouncement,
            dailySection
        );
    }

    dailyAndAnnouncement.appendChild(announcementContainer);
    dailyAndAnnouncement.appendChild(dailySection);
}

  // Кнопки категорий
  buttons.forEach(button => {
    button.addEventListener('click', () => {
    const categoryName = button.dataset.category;
const targetId = `category-${categoryName.replace(/ /g, '-')}`;
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Карточки блюд
  const cards = document.querySelectorAll('.menu-card, .daily-menu-card');

  const modal = document.querySelector('.dish-modal');
  const modalImage = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalDescription = document.getElementById('modal-description');
  const modalAllergens = document.getElementById('modal-allergens');
  const modalPrice = document.getElementById('modal-price');
  const modalClose = document.getElementById('modal-close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modalImage.classList.toggle(
    'daily-menu-modal-image',
    card.classList.contains('daily-menu-card')
);
      modalImage.src = card.dataset.image;
      modalImage.alt = card.dataset.name;
      modalName.textContent = card.dataset.name;
      modalDescription.textContent = card.dataset.description;
      modalAllergens.textContent = card.dataset.allergens
    ? `Alergény: ${card.dataset.allergens}`
    : '';
      modalPrice.textContent = card.dataset.price;

      modal.style.display = 'block';
    });
  });

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
}

async function loadAnnouncement() {
    const { data, error } = await supabase
        .from('site_settings')
        .select('announcement')
        .eq('id', 1)
        .single();

    if (error) {
        console.error('Chyba pri načítaní upozornenia:', error);
        return;
    }

    const announcementImage = data.announcement || '/akcia-default.png';

announcementContainer.innerHTML = `
    <h2 class="category-title">${translations[currentLanguage].promotion}</h2>

    <img
        src="${announcementImage}"
        alt="${translations[currentLanguage].promotion}Akcia"
    >
`;

announcementContainer.style.display = 'block';
}
loadMenu();
loadAnnouncement();
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

menuClose.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});
document.addEventListener('click', (event) => {
    if (
        sideMenu.classList.contains('open') &&
        !sideMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        sideMenu.classList.remove('open');
    }
});
const creatorButton = document.getElementById('creator-button');
const creatorLinks = document.getElementById('creator-links');

if (creatorButton && creatorLinks) {
    creatorButton.addEventListener('click', () => {
        creatorLinks.classList.toggle('open');
    });
}

function setLanguage(lang) {
    const t = translations[lang];

    if (!t) return;

    currentLanguage = lang;
    document.querySelectorAll('.tab-btn').forEach(button => {

    const category = button.dataset.category;

    const categoryTranslations = {
        'Predjedlá': t.catPredjedla,
        'Nátierky': t.catNatierky,
        'Šaláty': t.catSalaty,
        'Pita menu': t.catPita,
        'Grécko na tanieri': t.catPlate,
        'Ryby a plody mora': t.catFish,
        'Dezerty': t.catDesserts,
        'Nápoje': t.catDrinks
    };

    if (categoryTranslations[category]) {
        button.textContent = categoryTranslations[category];
    }

});

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;

        if (t[key]) {
            element.textContent = t[key];
        }
    });

    const creatorButton = document.querySelector('.creator-button');

    if (creatorButton) {
        creatorButton.textContent = t.creator;
    }

    const mapButton = document.querySelector('.maps-button');

    if (mapButton) {
        mapButton.textContent = `📍 ${t.mapButton}`;
    }


document.querySelectorAll('.language-btn').forEach(button => {
    button.classList.toggle(
        'active',
        button.dataset.lang === lang
    );
});

localStorage.setItem('language', lang);
}
document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-btn');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');

            console.log('Выбран язык:', lang);

            setLanguage(lang);

loadMenu();
loadAnnouncement();
        });
    });

    const savedLanguage = localStorage.getItem('language') || 'sk';
    setLanguage(savedLanguage);
});
