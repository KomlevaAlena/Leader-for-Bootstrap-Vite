import { resolve } from 'path';

export default {
  root: resolve(__dirname, 'src'), // Корневая папка — src
  build: {
    outDir: resolve(__dirname, 'dist'), // Папка для сборки — dist
  },
  server: {
    port: 8080, // Порт для dev-сервера
  },
};
