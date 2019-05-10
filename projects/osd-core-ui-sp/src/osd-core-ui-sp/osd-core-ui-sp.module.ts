import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OsdCoreUISPComponent } from './osd-core-ui-sp..component';
import { OsdHeaderSPComponent } from './components/osd-header-sp-component/osd-header-sp.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OsdFooterSPComponent } from './components/osd-footer-sp-component/osd-footer-sp.component';
import { OsdLeftSideBarSPComponent } from './components/osd-left-side-bar-sp-component/osd-left-side-bar-sp.component';
import { OsdLoginSPComponent } from './components/osd-login-sp-component/osd-login-sp.component';
import { ReactiveFormsModule }    from '@angular/forms';

@NgModule({
  declarations: [
    OsdCoreUISPComponent, 
    OsdHeaderSPComponent, 
    OsdFooterSPComponent, 
    OsdLeftSideBarSPComponent, 
    OsdLoginSPComponent
  ],
  imports: [ 
    BrowserModule, 
    NgbModule,
    ReactiveFormsModule,
   
  ],
  exports: [
    OsdCoreUISPComponent, 
    OsdHeaderSPComponent, 
    OsdFooterSPComponent, 
    OsdLeftSideBarSPComponent, 
    OsdLoginSPComponent
  ]
})
export class OsdCoreUISPLibModule { }
