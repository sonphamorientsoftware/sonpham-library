import { Injectable } from '@angular/core';
import { OsdMenuItemSPModel } from '../../models/osd-header-sp-model/OsdMenuItemSPModel';
import { OsdLogoSPModel } from '../../models/osd-header-sp-model/OsdLogoSPModel'

@Injectable({
  providedIn: 'root'
})
export class OsdHeaderSPService {

  constructor() { }

  public GetMenuItems(menuItems: OsdMenuItemSPModel[]) : OsdMenuItemSPModel[] {
    return menuItems;
  }

  public GetLogo(logo: OsdLogoSPModel) : OsdLogoSPModel {
    return logo;
  }
}
