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
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
}
```
