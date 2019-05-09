import { Injectable } from '@angular/core';
import { LeftSideBarModel } from '../../models/leftSideBarModel/LeftSideBarModel'

@Injectable({
  providedIn: 'root'
})
export class LeftSideBarService {

  constructor() { }

  public GetLeftSideBars(leftSideBars: LeftSideBarModel[]) : LeftSideBarModel[] {
    return leftSideBars;
  }
}
