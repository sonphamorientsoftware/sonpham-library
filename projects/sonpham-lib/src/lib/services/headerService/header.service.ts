import { Injectable } from '@angular/core';
import { MenuItemModel } from '../../models/headerModel/MenuItemModel';
import { LogoModel } from '../../models/headerModel/LogoModel'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  public GetMenuItems(menuItems: MenuItemModel[]) : MenuItemModel[] {
    return menuItems;
  }

  public GetLogo(logo: LogoModel) : LogoModel {
    return logo;
  }
}
