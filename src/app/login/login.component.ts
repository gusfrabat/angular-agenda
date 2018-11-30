import { Component, OnInit } from '@angular/core';
import { AutentificationService } from '../service/autentification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogIn } from '../models/login';
import { Registro } from '../models/registo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutentificationService]
})
export class LoginComponent implements OnInit {

  show: boolean;
  titulo: string;
  Log: LogIn;
  error: boolean;
  errorMessage: string;
  Reg: Registro;

  constructor(
    private AutService: AutentificationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Login';
    this.Log = new LogIn;
    this.Reg = new Registro;
  }

  ngOnInit() {
    this.show = true;
  }

  OnSubmit() {
    this.LogIn();
  }

  OnSubmitt() {
    this.Registro();
  }

  LogIn() {
    this.AutService.LogIn(this.Log).subscribe(
      response => {
        if (response.code === 200) {
          this.Log = new LogIn;
          this.error = false;
          localStorage.setItem('usuario', response.data.id);
          this.router.navigate(['/home']);
        } else {
          console.log(response);
          this.Log = new LogIn;
          this.error = true;
          this.errorMessage = 'usuario o contraseña incorrectos';
        }
      });
  }

  Registro() {
    this.AutService.Registro(this.Reg).subscribe(
      response => {
        if (response.code === 200) {
          this.Reg = new Registro;
          this.error = false;
          this.show = true;
        } else {
          console.log(response);
          this.Reg = new Registro;
          this.error = true;
          this.errorMessage = 'documento incorrecto';
        }
      });
  }


  showReg() {
    this.show = false;
    this.titulo = 'Registro usuario';
  }

  showLog() {
    this.show = true;
    this.titulo = 'Login';
  }
}
