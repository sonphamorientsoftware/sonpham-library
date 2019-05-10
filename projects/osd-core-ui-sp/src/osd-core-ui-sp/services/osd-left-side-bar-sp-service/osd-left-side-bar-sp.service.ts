import { Injectable } from '@angular/core';
import { OsdLeftSideBarSPModel } from '../../models/osd-left-side-bar-sp-model/OsdLeftSideBarSPModel'

@Injectable({
  providedIn: 'root'
})
export class OsdLeftSideBarSPService {

  constructor() { }

  public GetLeftSideBars(leftSideBars: OsdLeftSideBarSPModel[]) : OsdLeftSideBarSPModel[] {
    return leftSideBars;
  }
}
