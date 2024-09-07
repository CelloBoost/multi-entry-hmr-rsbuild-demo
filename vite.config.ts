import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import { resolve } from 'path';

const ROOT = resolve(__dirname, 'src');
const OUTPUT_DIR = resolve(__dirname, 'dist');
const PUBLIC_DIR = resolve(__dirname, 'public');

function getInput() {
  const inputs: { [key: string]: string } = {};
  const files = fs.readdirSync(ROOT);
  const htmlFiles = files.filter((file) => file.endsWith('.html'));
  htmlFiles.forEach((file) => {
    const inputKey = file.replace('.html', '');
    inputs[inputKey] = resolve(ROOT, file);
  });
  return inputs;
}

// https://vitejs.dev/config/
export default defineConfig({
  root: ROOT,
  publicDir: PUBLIC_DIR,
  plugins: [react()],
  build: {
    emptyOutDir: true,
    outDir: OUTPUT_DIR,
    rollupOptions: {
      input: getInput()
    }
  }
})
