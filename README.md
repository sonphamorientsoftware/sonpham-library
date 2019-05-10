# sonpham-lib

This project library demo for 4 components: Header, LeftSideBar, Footer, Login

### Infrastructure:

```shell
--- models
------ footerModel
------------ FooterModel.ts
------ headerModel
------------ LogoModel.ts
------------ MenuItemModel.ts
------ leftSideBarModel
------------ LeftSideBarModel.ts

--- services
------ footerService
------------ footer.service.spec.ts
------------ footer.service.ts
------ headerService
------------ header.service.spec.ts
------------ header.service.ts
------ leftSideBarService
------------ leftSideBar.service.spec.ts
------------ leftSideBar.service.ts
------ userService
------------ user.service.spec.ts
------------ user.service.ts

--- components
------ footer-components
------------ footer.component.html
------------ footer.component.scss
------------ footer.component.ts
------------ footer.module.ts
------ header-components
------------ header.component.html
------------ header.component.scss
------------ header.component.ts
------------ header.module.ts
------ left-side-bar-components
------------ left-side-bar.component.html
------------ left-side-bar.component.scss
------------ left-side-bar.component.ts
------------ left-side-bar.module.ts
------ login-components
------------ login.component.html
------------ login.component.scss
------------ login.component.ts
------------ login.module.ts
```


## Dependencies
| ng-bootstrap | Angular | Bootstrap CSS | fortawesome |
| ------------ | ------- | ------------- | ------------|
| 4.x.x        | 7.x.x   | 4.x.x         | 5.x.x

## Intall npm

NPM link: [https://www.npmjs.com/package/sonpham-lib](https://www.npmjs.com/package/sonpham-lib)

```shell
npm install --save sonpham-lib
```

## How to use SonPham-Lib

### Before start to use SonPham-Lib
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
### 3. Install SonPham-Lib

```shell
npm install --save sonpham-lib
```

### 4. Import SonPham-Lib modules to projects

```ts
// SonPhamLib Module include Header component
import { SonphamLibModule } from 'sonpham-lib';

...
...
imports: [
    SonphamLibModule,
  ],
```

### How to use sonpham-header component

  Template
```html
<sonpham-header [menuItems]="menuItems" [logo]="logo"></sonpham-header>
```
 Setting header on component file such as app.component.ts
```ts
  // Import Model
  import { MenuItemModel } from 'sonpham-lib/lib/models/headerModel/MenuItemModel';
  import { LogoModel } from 'sonpham-lib/lib/models/headerModel/LogoModel';
  // Setting header to render
  menuItems: MenuItemModel[] = [{
    title : "Menu 1",
    link : "/menu1"
  },
  {
    title : "Menu 2",
    link: "/menu2"
  }
  ];

  logo: LogoModel = {
    link : "/",
    logoImage: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8d2f6247619371.587fc4b8c063b.png",
    width: 20,
    height: 20
  };

```

### How to use sonpham-footer component

  
  Template
```html
<sonpham-footer [footer]="footer"></sonpham-footer>
```
 Setting footer on component file such as app.component.ts
```ts
// Import Model
  import { FooterModel } from 'sonpham-lib/lib/models/footerModel/FooterModel';
// Setting header to render
  footer: FooterModel = {
    title: 'Son Pham Footer',
    link: '/sonpham-footer'
  }

```

### How to use sonpham-left-side-bar component

  Template
```html
  <sonpham-left-side-bar [leftSideBars]="leftSideBars">

    Content website
    <ng-content></ng-content> 

  </sonpham-left-side-bar>
```
 Setting header on component file such as app.component.ts
```ts
// Import Model
  import { LeftSideBarModel } from 'sonpham-lib/lib/models/leftSideBarModel/LeftSideBarModel';
// Setting left side bar to render
  leftSideBars: LeftSideBarModel[] = [
    {
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
<sonpham-login></sonpham-login>
```