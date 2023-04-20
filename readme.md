## VITE install

1. Jeigu turim įsirašę node.js jau tada užtenka `npm create vite@latest` ir sukuriam papkę kurioje dirbsim (projekto pavadinimą)
2. tada darom `npm install` ir paleist projektą galime su `npm run dev` arba pasikeičiam package.json pridedam dar viena eilutę "start": "vite", prie scripts ir galim tada paleist su `npm start`
3. pasikeičiam localhost port'ą vite.config.js prisirašom server: {
   port: 3000,
   },
4. užbaigiam su `npm install react react-dom react-router-dom @vitejs/plugin-react-refresh`

## eslint install

1. `npm install vite-plugin-eslint eslint eslint-config-react-app --save-dev`
2. .eslintrc > {"extends": ["react-app"]}
3. vite.config.js >> import eslint from 'vite-plugin-eslint';
4. vite.config.js >> plugins: [react(), eslint()],

## router-dom

1. `npm i react-router-dom`
2. prideti BrowserRouter i main.jsx import { BrowserRouter } from 'react-router-dom';
3. susikurti Routes ten kur bus generuojami koponentai.
4. Navigacijai naudojam Link ir NavLink komponentus.

## sass css

1. `npm install sass`

## firebase

1. `npm install firebase`
2. sukuriam .env faila sukonfiguruojam
3. tada idedam i git ignore
4. sutvarkom firebase.js failą

## toast install

1. `npm install react-hot-toast`

## formoms ir validacijai naudosim YUP ir FORMIK

1. `npm install formik yup`
2. yup importas `import * as Yup from 'yup';` kad nepamirst
