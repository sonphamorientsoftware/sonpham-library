import { Injectable } from '@angular/core';
import { FooterModel } from '../../models/footerModel/FooterModel';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  public GetFooter(footer: FooterModel) : FooterModel {
    return footer;
  }
}
