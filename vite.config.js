import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'), // Корневая папка — src
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Папка для сборки — dist
  },
  server: {
    port: 8080, // Порт для dev-сервера
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/images/icons')], // Путь к иконкам
      symbolId: 'icon-[name]', // Шаблон для id иконок
    }),
  ],
});
