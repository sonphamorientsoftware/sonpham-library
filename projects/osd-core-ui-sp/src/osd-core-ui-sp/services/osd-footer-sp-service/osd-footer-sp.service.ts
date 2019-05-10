import { Injectable } from '@angular/core';
import { OsdFooterSPModel } from '../../models/osd-footer-sp-model/OsdFooterSPModel';

@Injectable({
  providedIn: 'root'
})
export class OsdFooterSPService {

  constructor() { }

  public GetFooter(footer: OsdFooterSPModel) : OsdFooterSPModel {
    return footer;
  }
}
