import { supabase } from './supabase.js';

const menuContainer = document.getElementById('admin-menu');
const logoutButton = document.getElementById('logout-button');

const addDishButton = document.getElementById('add-dish-button');
const addDishForm = document.getElementById('add-dish-form');
const saveNewDishButton = document.getElementById('save-new-dish');
const cancelNewDishButton = document.getElementById('cancel-new-dish');
const newCategorySelect = document.getElementById('new-category');
const newCategoryCustom = document.getElementById('new-category-custom');
const newName = document.getElementById('new-name');
const newPrice = document.getElementById('new-price');
const newDescription = document.getElementById('new-description');
const newImage = document.getElementById('new-image');
const newAllergens = document.getElementById('new-allergens');
const saveAnnouncementButton = document.getElementById('save-announcement');
const clearAnnouncementButton = document.getElementById('clear-announcement');
const announcementImage = document.getElementById('announcement-image');
async function loadAnnouncement() {
    const { data, error } = await supabase
        .from('site_settings')
        .select('announcement')
        .eq('id', 1)
        .single();

    if (error) {
        console.error('Chyba pri načítaní akcie:', error);
        return;
    }

    if (data.announcement) {
        announcementContainer.innerHTML = `
            <strong>🔥 AKCIA🔥</strong>

            <img
                src="${data.announcement}"
                alt="Akcia"
            >
        `;

        announcementContainer.style.display = 'block';
    } else {
        announcementContainer.style.display = 'none';
    }
}

saveAnnouncementButton.addEventListener('click', async () => {

    const imageFile = announcementImage.files[0];

    if (!imageFile) {
        alert('Vyberte obrázok akcie.');
        return;
    }

    const fileName = `akcia-${Date.now()}-${imageFile.name}`;

    const { error: uploadError } = await supabase
        .storage
        .from('menu-images')
        .upload(fileName, imageFile);

    if (uploadError) {
        console.error('Chyba pri nahrávaní obrázka akcie:', uploadError);
        alert('Nepodarilo sa nahrať obrázok.');
        return;
    }

    const { data: publicUrlData } = supabase
        .storage
        .from('menu-images')
        .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    const { error } = await supabase
        .from('site_settings')
        .update({
            announcement: imageUrl
        })
        .eq('id', 1);

    if (error) {
        console.error('Chyba pri ukladaní akcie:', error);
        alert('Nepodarilo sa uložiť akciu.');
        return;
    }

    alert('Akcia bola uložená.');
});

clearAnnouncementButton.addEventListener('click', async () => {

    const { error } = await supabase
        .from('site_settings')
        .update({
            announcement: null
        })
        .eq('id', 1);

    if (error) {
        console.error('Chyba pri odstraňovaní akcie:', error);
        alert('Nepodarilo sa vymazať akciu.');
        return;
    }

    announcementImage.value = '';

    alert('Akcia bola vymazaná.');
});
   newCategorySelect.addEventListener('change', () => {

    if (newCategorySelect.value === '__new__') {
        newCategoryCustom.style.display = 'block';
        newCategoryCustom.focus();
    } else {
        newCategoryCustom.style.display = 'none';
        newCategoryCustom.value = '';
    }

    const isDailyMenu = newCategorySelect.value === 'Denné Menu';

    newName.style.display = isDailyMenu ? 'none' : 'block';
    newPrice.style.display = isDailyMenu ? 'none' : 'block';
    newDescription.style.display = isDailyMenu ? 'none' : 'block';
    newAllergens.style.display = isDailyMenu ? 'none' : 'block';
});

// Проверяем авторизацию
async function checkUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
        window.location.href = '/admin.html';
        return null;
    }

    return data.user;
}


// Форма добавления блюда
addDishButton.addEventListener('click', () => {
    addDishForm.style.display = 'block';
    addDishButton.style.display = 'none';
});


// Отмена добавления
cancelNewDishButton.addEventListener('click', () => {
    addDishForm.style.display = 'none';
    addDishButton.style.display = 'inline-block';
});


// Добавление нового блюда
saveNewDishButton.addEventListener('click', async () => {

    let name = newName.value.trim();

let category = newCategorySelect.value;

if (category === '__new__') {
    category = newCategoryCustom.value.trim();
}

let price = Number(newPrice.value);
let description = newDescription.value.trim();

const imageFile = newImage.files[0];

let allergens = newAllergens.value.trim();
const available = document.getElementById('new-available').checked;


// Denné Menu
if (category === 'Denné Menu') {
    name = null;
    price = 0;
    description = null;
    allergens = null;

    if (!imageFile) {
        alert('Vyberte obrázok denného menu.');
        return;
    }
}


// Ostatné jedlá
else {
    if (!name || !category || !price || !imageFile) {
        alert('Vyplňte názov, kategóriu, cenu a obrázok.');
        return;
    }
}
const fileName = `${Date.now()}-${imageFile.name}`;

const { error: uploadError } = await supabase
    .storage
    .from('menu-images')
    .upload(fileName, imageFile);

if (uploadError) {
    console.error('Chyba pri nahrávaní obrázka:', uploadError);
    alert('Nepodarilo sa nahrať obrázok.');
    return;
}

const { data: imageData } = supabase
    .storage
    .from('menu-images')
    .getPublicUrl(fileName);

const image = imageData.publicUrl;


    const { error } = await supabase
    .from('menu')
    .insert({
        name,
        category,
        price,
        description: description || null,
        image,
        allergens: allergens || null,
        available
    });


    if (error) {
        console.error('Chyba pri pridávaní jedla:', error);
        alert('Nepodarilo sa pridať jedlo.');
        return;
    }


    alert('Jedlo bolo pridané.');

    // Очищаем форму
    document.getElementById('new-name').value = '';
    document.getElementById('new-category').value = '';
    newCategoryCustom.value = '';
newCategoryCustom.style.display = 'none';
    document.getElementById('new-price').value = '';
    document.getElementById('new-description').value = '';
    document.getElementById('new-image').value = '';
    document.getElementById('new-allergens').value = '';
    document.getElementById('new-available').checked = true;

    addDishForm.style.display = 'none';
    addDishButton.style.display = 'inline-block';

    loadMenu();
});


// Загружаем меню
async function loadMenu() {

    const { data, error } = await supabase
        .from('menu')
        .select('*')
        .order('id');

    if (error) {
        console.error('Chyba pri načítaní menu:', error);
        menuContainer.innerHTML = '<p>Nepodarilo sa načítať menu.</p>';
        return;
    }
    const categories = [
        'Denné Menu',
    ...new Set(
        data
            .map(item => item.category)
            .filter(category => category)
    )
];

newCategorySelect.innerHTML = `
    <option value="">Vyberte kategóriu</option>
    ${categories.map(category => `
        <option value="${category}">${category}</option>
    `).join('')}
    <option value="__new__">+ Nová kategória</option>
`;

    menuContainer.innerHTML = '';


    data.forEach(item => {

        const dish = document.createElement('div');

        dish.className = 'admin-dish';

        dish.innerHTML = `
            <h3>${item.name}</h3>
            ${item.image ? `
    <img
        src="${item.image}"
        alt="${item.name}"
        class="admin-dish-image"
    >
` : ''}

            <p>Kategória: ${item.category}</p>

            <p>Cena: ${Number(item.price).toFixed(2)} €</p>

            <p>Popis: ${item.description || 'Bez popisu'}</p>

            <p>Alergény: ${item.allergens || 'Bez údajov'}</p>

            <p>
                Dostupné:
                ${item.available ? 'Áno' : 'Nie'}
            </p>

            <button class="edit-button" data-id="${item.id}">
                Upraviť
            </button>

            <button class="delete-button" data-id="${item.id}">
                Odstrániť
            </button>

            <div class="edit-form" id="edit-${item.id}" style="display: none;">

                <input
                    type="text"
                    class="edit-name"
                    value="${item.name || ''}"
                    placeholder="Názov"
                >

                <input
                    type="text"
                    class="edit-category"
                    value="${item.category || ''}"
                    placeholder="Kategória"
                >

                <input
                    type="number"
                    step="0.01"
                    class="edit-price"
                    value="${item.price || ''}"
                    placeholder="Cena"
                >

                <textarea
                    class="edit-description"
                    placeholder="Popis"
                >${item.description || ''}</textarea>

                <input
                    type="text"
                    class="edit-image"
                    value="${item.image || ''}"
                    placeholder="Cesta k obrázku"
                >

                <input
                    type="text"
                    class="edit-allergens"
                    value="${item.allergens || ''}"
                    placeholder="Alergény"
                >

                <label>
                    <input
                        type="checkbox"
                        class="edit-available"
                        ${item.available ? 'checked' : ''}
                    >
                    Dostupné
                </label>

                <button class="save-button" data-id="${item.id}">
                    Uložiť zmeny
                </button>

                <button class="cancel-button" data-id="${item.id}">
                    Zrušiť
                </button>

            </div>
        `;

        menuContainer.appendChild(dish);
    });


    // Кнопки Upraviť
    document.querySelectorAll('.edit-button').forEach(button => {

        button.addEventListener('click', () => {

            const id = button.dataset.id;
            const form = document.getElementById(`edit-${id}`);

            form.style.display = 'block';
            button.style.display = 'none';

        });

    });


    // Кнопки Zrušiť
    document.querySelectorAll('.cancel-button').forEach(button => {

        button.addEventListener('click', () => {

            const id = button.dataset.id;
            const form = document.getElementById(`edit-${id}`);
            const editButton = document.querySelector(
                `.edit-button[data-id="${id}"]`
            );

            form.style.display = 'none';
            editButton.style.display = 'inline-block';

        });

    });


    // Кнопки Uložiť zmeny
    document.querySelectorAll('.save-button').forEach(button => {

        button.addEventListener('click', async () => {

            const id = button.dataset.id;
            const form = document.getElementById(`edit-${id}`);

            const name = form.querySelector('.edit-name').value.trim();
            const category = form.querySelector('.edit-category').value.trim();
            const price = Number(form.querySelector('.edit-price').value);
            const description = form.querySelector('.edit-description').value.trim();
            const image = form.querySelector('.edit-image').value.trim();
            const allergens = form.querySelector('.edit-allergens').value.trim();
            const available = form.querySelector('.edit-available').checked;


            const { error } = await supabase
                .from('menu')
                .update({
                    name,
                    category,
                    price,
                    description: description || null,
                    image,
                    allergens: allergens || null,
                    available
                })
                .eq('id', id);


            if (error) {
                console.error('Chyba pri ukladaní zmien:', error);
                alert('Nepodarilo sa uložiť zmeny.');
                return;
            }

            alert('Zmeny boli uložené.');

            loadMenu();

        });

    });


    // Кнопки Odstrániť
    document.querySelectorAll('.delete-button').forEach(button => {

        button.addEventListener('click', async () => {

            const id = button.dataset.id;

            const confirmed = confirm(
                'Naozaj chcete odstrániť toto jedlo?'
            );

            if (!confirmed) {
                return;
            }


            const { error } = await supabase
                .from('menu')
                .delete()
                .eq('id', id);


            if (error) {
                console.error('Chyba pri odstraňovaní jedla:', error);
                alert('Nepodarilo sa odstrániť jedlo.');
                return;
            }


            alert('Jedlo bolo odstránené.');

            loadMenu();

        });

    });

}


// Выход
logoutButton.addEventListener('click', async () => {

    await supabase.auth.signOut();

    window.location.href = '/admin.html';

});


// Запуск
const user = await checkUser();

if (user) {
    loadMenu();
     loadAnnouncement();
}