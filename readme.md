## VITE install

1. Jeigu turim įsirašę node.js jau tada užtenka `npm create vite@latest` ir sukuriam papkę kurioje dirbsim (projekto pavadinimą)
2. tada darom `npm install` ir paleist projektą galime su `npm run dev` arba pasikeičiam package.json pridedam dar viena eilutę "start": "vite", prie scripts ir galim tada paleist su `npm start`
3. pasikeičiam localhost port'ą vite.config.js prisirašom server: {
   port: 3000,
   },
4. užbaigiam su `npm install react react-dom react-router-dom @vitejs/plugin-react-refresh`
