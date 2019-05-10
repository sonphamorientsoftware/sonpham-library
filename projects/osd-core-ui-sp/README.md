# osd-core-ui-lib

This project library demo for 4 components: Header, LeftSideBar, Footer, Login

### Infrastructure:

```shell
--- models
------ osd-footer-sp-model
------------ OsdFooterSPModel.ts
------ osd-header-sp-model
------------ OsdLogoSPModel.ts
------------ OsdMenuItemSPModel.ts
------ osd-left-side-bar-sp-model
------------ OsdLeftSideBarSPModel.ts

--- services
------ osd-footer-sp-service
------------ osd-footer-sp.service.spec.ts
------------ osd-footer-sp.service.ts
------ osd-header-sp-service
------------ osd-header-sp.service.spec.ts
------------ osd-header-sp.service.ts
------ osd-left-side-bar-service
------------ osd-left-side-bar.service.spec.ts
------------ osd-left-side-bar.service.ts
------ osd-user-service
------------ osd-user.service.spec.ts
------------ osd-user.service.ts

--- components
------ osd-footer-sp-components
------------ osd-footer-sp.component.html
------------ osd-footer-sp.component.scss
------------ osd-footer-sp.component.ts
------------ osd-footer-sp.module.ts
------ osd-header-sp-components
------------ osd-header-sp.component.html
------------ osd-header-sp.component.scss
------------ osd-header-sp.component.ts
------------ osd-header-sp.module.ts
------ osd-left-side-bar-sp-components
------------ osd-left-side-bar-sp.component.html
------------ osd-left-side-bar-sp.component.scss
------------ osd-left-side-bar-sp.component.ts
------------ osd-left-side-bar-sp.module.ts
------ osd-login-sp-components
------------ osd-login-sp.component.html
------------ osd-login-sp.component.scss
------------ osd-login-sp.component.ts
------------ osd-login-sp.module.ts
```


## Dependencies
| ng-bootstrap | Angular | Bootstrap CSS | fortawesome |
| ------------ | ------- | ------------- | ------------|
| 4.x.x        | 7.x.x   | 4.x.x         | 5.x.x

## Intall npm

NPM link: [https://www.npmjs.com/package/osd-core-ui-sp](https://www.npmjs.com/package/osd-core-ui-sp)

```shell
npm install --save osd-core-ui-sp
```

## How to use osd-core-ui-sp

### Before start to use osd-core-ui-sp
Please help me to make sure your project installed some dependencies:
  - ng-bootstrap
```shell
npm install --save @ng-bootstrap/ng-bootstrap
```
  - boostrap
```shell
npm install --save bootstrap
```


### 1. Add Bootstrap CSS to styles.scss or styles.css
You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can [get Bootstrap from npm](https://www.npmjs.com/package/bootstrap) and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

Or update this on file style.css or style.scss

```scss
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
```
### 2. Add fontAwesome
You also add Font Awesome's CDN to your project, example via CDN to file index.html

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
```
### 3. Install osd-core-ui-lib

```shell
npm install --save osd-core-ui-sp
```

### 4. Import osd-core-ui-lib modules to projects

```ts
// OsdCoreUILibModule Module include Header component
import { OsdCoreUISPLibModule } from 'osd-core-ui';

...
...
imports: [
    OsdCoreUISPLibModule,
  ],
```

### How to use osd-header-sp component

  Template
```html
<osd-header-sp [menuItems]="menuItems" [logo]="logo"></osd-header-sp>
```
 Setting header on component file such as app.component.ts
```ts
  // Import Model
  import { OsdMenuItemSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-header-sp-model/OsdMenuItemSPModel';
import { OsdLogoSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-header-sp-model/OsdLogoSPModel';
  // Setting header to render
  menuItems: OsdMenuItemSPModel[] = [{
    title : "Menu 1",
    link : "/menu1"
  },
  {
    title : "Menu 2",
    link: "/menu2"
  }
  ];

  logo: OsdLogoSPModel = {
    link : "/",
    logoImage: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8d2f6247619371.587fc4b8c063b.png",
    width: 20,
    height: 20
  };

```

### How to use osd-footer-sp component

  
  Template
```html
<osd-footer-sp [footer]="footer"></osd-footer-sp>
```
 Setting footer on component file such as app.component.ts
```ts
// Import Model
  import { OsdFooterSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-footer-sp-model/OsdFooterSPModel';
// Setting header to render
  footer: OsdFooterSPModel = {
    title: 'Son Pham Footer',
    link: '/sonpham-footer'
  }

```

### How to use sonpham-left-side-bar component

  Template
```html
  <osd-left-side-bar-sp [leftSideBars]="leftSideBars">
  <ng-content></ng-content> => Content website
  </osd-left-side-bar-sp>
```
 Setting header on component file such as app.component.ts
```ts
// Import Model
  import { OsdLeftSideBarSPModel } from 'osd-core-ui-sp/osd-core-ui-sp/models/osd-left-side-bar-sp-model/OsdLeftSideBarSPModel';
// Setting left side bar to render
  leftSideBars: OsdLeftSideBarSPModel[] = [{
    title : "Home",
    link : "/home",
    icon: "fas fa-home",
  },
  {
    title : "About",
    link: "/about",
    icon: "fas fa-briefcase",
  }
  ];
```

### How to use sompham-login component

  Template
```html
<osd-login-sp></osd-login-sp>
```