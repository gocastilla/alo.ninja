This is my personal web... made with Angular and Universal. Hosted in Firebase.

... I will try to keep it updated... maybe not the content but the Angular version ;) [alo.dev](https://alo.dev)

You can see a step by step guide [here](https://github.com/AlmeriaJS/angular6-web-ssr)

If you want to play with this project, just clone it and

Development mode

```bash
npm i
npm start
```

SSR mode

```bash
npm i
npm run build:universal
npm run start:express-server
```

Prerender mode

```bash
npm i
npm run build:universal
npm run tsc:prerender
npm run prerender
npx http-server dist/ssrtest/
```
