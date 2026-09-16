import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                about: resolve(process.cwd(), 'about.html'),
                catering: resolve(process.cwd(), 'catering.html'),
                allergens: resolve(process.cwd(), 'allergens.html'),
                admin: resolve(process.cwd(), 'admin.html'),
                adminPanel: resolve(process.cwd(), 'admin-panel.html'),
                creator: resolve(process.cwd(), 'creator.html')
                
            }
        }
    }
})
