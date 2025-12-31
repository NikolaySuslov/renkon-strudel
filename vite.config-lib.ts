import { defineConfig } from 'vite'
import { resolve } from 'path'
import replace from '@rollup/plugin-replace'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      formats: ["es"],
      name: 'Renkon-Strudel',
      fileName: 'renkon-strudel',
    },
    minify: false,
    rollupOptions: {
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production'),
          preventAssignment: true,
        }),
      ]
      //            output: {
      //                manualChunks: {
      //                    typescript: ["typescript"]
      //                }
      //            }
    }
  }
})
