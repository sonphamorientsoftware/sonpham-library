import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { OsdMenuItemSPModel } from '../../models/osd-header-sp-model/OsdMenuItemSPModel';
import { OsdLogoSPModel } from '../../models/osd-header-sp-model/OsdLogoSPModel';
import { OsdHeaderSPService } from '../../services/osd-header-sp-service/osd-header-sp.service';


@Component({
  selector: 'osd-header-sp',
  templateUrl: './osd-header-sp.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./osd-header-sp.component.scss']
})
export class OsdHeaderSPComponent implements OnInit {

  /**
   * menuItems model should be MenuItemModel[]
   */
  @Input() menuItems: OsdMenuItemSPModel[];

  /**
   * logo model should be LogoModel
   */
  @Input() logo: OsdLogoSPModel;
  constructor(private headerService: OsdHeaderSPService)  { }

  ngOnInit() {
    this.menuItems = this.headerService.GetMenuItems(this.menuItems);
    this.logo = this.headerService.GetLogo(this.logo);
  }

  
  
}
