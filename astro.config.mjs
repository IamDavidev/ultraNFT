import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit'

// integration with lit decorators
export default defineConfig({
    integrations: [lit()]
})
