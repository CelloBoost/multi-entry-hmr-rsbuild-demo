# Multi-entry points migrate from Vite to Rsbuild

## Install Dependencies

```bash
npm remove vite
npm add @rsbuild/core -D
npm add @rsbuild/plugin-react -D
```

## Update npm scripts

```json
{
  "scripts": {
    "dev": "rsbuild dev",
    "build": "rsbuild build",
    "preview": "rsbuild preview"
  }
}
```
