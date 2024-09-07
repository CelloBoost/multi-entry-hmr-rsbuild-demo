import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const entries = {
  index: {
    name: 'index',
    html: './src/index.html',
    import: './src/home/main.tsx'
  },
  entry_one: {
    name: 'entry_one',
    html: './src/entry_one.html',
    import: './src/entry_one/main.tsx'
  },
  entry_two: {
    name: 'entry_two',
    html: './src/entry_two.html',
    import: './src/entry_two/main.tsx'
  }
};

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template({ entryName }) {
      return entries[entryName]?.html;
    }
  },
  source: {
    entry: {
      // https://github.com/web-infra-dev/rsbuild/discussions/2290#discussioncomment-9367514
      hello: { import: './src/utils/hello.mts' },
      [entries.index.name]: { import: entries.index.import, dependOn: 'hello' },
      [entries.entry_one.name]: { import: entries.entry_one.import, dependOn: 'hello' },
      [entries.entry_two.name]: { import: entries.entry_two.import, dependOn: 'hello' }
    }
  },
  tools: {
    bundlerChain(chain, { CHAIN_ID }) {
      // remove depend entry (like: hello.html)
      chain.plugins.delete(`${CHAIN_ID.PLUGIN.HTML}-hello`);
    },
  },
});