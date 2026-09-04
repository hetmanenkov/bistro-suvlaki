import { supabase } from './supabase.js';

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('login-error');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorMessage.textContent = '';

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        errorMessage.textContent = 'Nesprávny e-mail alebo heslo.';
        console.error(error);
        return;
    }

    window.location.href = '/admin-panel.html';
});