import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        visualizer({
            open: true,
            filename: './rollup-plugin-visualizer.html',
            template: 'treemap'
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                math: 'parens-division'
            },
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    base: '/'
});
