# REACT APPLICATION WITH VITE

## 1. Create a new React app using Vite

```shell
yarn create vite my-react-app --template react-ts
yarn
yarn dev
```

## 2. Integrate with Tailwind

```shell
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add these lines into `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update the `content` property of the `tailwind.config.js`:
```js
{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
}
```

## 3. About environment variables
- `.env`: loaded in all cases.
- `.env.local`: loaded in all cases, ignored by Git.
- `.env.[mode]`: only loaded in a specific mode.
- `.env.[mode].local`: only loaded in a specific mode, ignored by Git.

Refer to [this link](https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite) to understand how to load env variables in Vite.