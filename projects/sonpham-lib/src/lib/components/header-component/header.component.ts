import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MenuItemModel } from '../../models/headerModel/MenuItemModel';
import { LogoModel } from '../../models/headerModel/LogoModel';
import { HeaderService } from '../../services/headerService/header.service';


@Component({
  selector: 'sonpham-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * menuItems model should be MenuItemModel[]
   */
  @Input() menuItems: MenuItemModel[];

  /**
   * logo model should be LogoModel
   */
  @Input() logo: LogoModel;
  constructor(private headerService: HeaderService)  { }

  ngOnInit() {
    this.menuItems = this.headerService.GetMenuItems(this.menuItems);
    this.logo = this.headerService.GetLogo(this.logo);
  }

  
  
}
