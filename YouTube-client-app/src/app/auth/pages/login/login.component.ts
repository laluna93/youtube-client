import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup, ValidationErrors, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login-services';
import { StatusLoginServices } from '../../services/Status-login-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isStatus:boolean = true;

  token = '125dsfdfs6fsd8f55456sdfsd';

  formAuth!: FormGroup;

  constructor(
    private rout: Router,
    private textLogin:LoginServices,
    private checkAut: StatusLoginServices,
  ) {

  }

  ngOnInit() {
    this.formAuth = new FormGroup({
      login: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(
        '',
        [
          Validators.required,
          this.validatorsPassword,

        ],
      ),
    });
  }

  authorization() {
    if (this.formAuth.value.login && this.formAuth.value.password) {
      this.rout.navigate(['']);
      localStorage.setItem('token', this.token);
      this.textLogin.saveLogin(this.formAuth.value.login);
      this.checkAut.checkAuth(this.isStatus);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  validatorsPassword(control: FormControl):ValidationErrors | null {
    const passwordLength = control.value && control.value.length > 7;
    if (!passwordLength) {
      return {
        invalidPassword: 'The password must be at least 8 characters long!',
      };
    } if ((!(/[A-Z]/.test(control.value)))) {
      return {
        invalidPassword: 'The password must contain uppercase letters!',
      };
    }
    if ((!(/[a-z]/.test(control.value)))) {
      return {
        invalidPassword: 'The password must contain lowercase letters!',
      };
    }

    if ((!(/[0-9]/.test(control.value)))) {
      return {
        invalidPassword: 'The password must contain numbers!',
      };
    }

    if ((!(/[!/@,/\]e#?$g%^&.*]/.test(control.value)))) {
      return {
        invalidPassword: 'The password must contain characters: e.g., ! @ # ? ]!',
      };
    }
    return null;
  }
}
