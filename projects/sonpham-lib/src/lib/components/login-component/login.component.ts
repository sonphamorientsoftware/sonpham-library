import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModel } from '../../models/loginModel/LoginModel'

@Component({
  selector: 'sonpham-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  closeResult: string;
  loginForm: LoginModel = {
    userName: "",
    password: ""
  };
  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    
  }

  public UserLogin(event, loginSuccess) : void {
    event.preventDefault();
    const target = event.target;
    const userName = target.querySelector("#userName").value;
    const password = target.querySelector("#password").value;

    this.loginForm.userName = userName;
    this.loginForm.password = password;

    this.modalService.open(loginSuccess, { centered: true });
  }
  
}
