import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SonphamLibComponent } from './sonpham-lib.component';
import { HeaderComponent } from './components/header-component/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer-component/footer.component';
import { LeftSideBarComponent } from './components/left-side-bar-component/left-side-bar.component';
import { LoginComponent } from './components/login-component/login.component';
import { ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    SonphamLibComponent, 
    HeaderComponent, 
    FooterComponent, 
    LeftSideBarComponent, 
    LoginComponent
  ],
  imports: [ 
    BrowserModule, 
    NgbModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    SonphamLibComponent, 
    HeaderComponent, 
    FooterComponent, 
    LeftSideBarComponent, 
    LoginComponent
  ]
})
export class SonphamLibModule { }
