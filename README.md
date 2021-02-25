# AngularApp

Proyecto para programación web de la Uniminuto.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Integración con GitHub Pages

Instalar Angular CLI gh-pages

```shell
npm i angular-cli-ghpages --save-dev
```

Buildear el proyecto
```shell
ng build --prod --base-href "https://omartinex.github.io/angular-app/"
```

Deployar el proyecto
```shell
npx angular-cli-ghpages --dir=dist/angular-app
```
