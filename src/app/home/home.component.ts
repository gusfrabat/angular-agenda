import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisesService } from '../service/api-pais.service';
import { Pais } from '../models/pais';
import { ContactosService } from '../service/contactos.service';
import { Contacto } from '../models/contacto';
import { Contactoss } from '../models/contacto.1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    PaisesService,
    ContactosService
  ]
})
export class HomeComponent implements OnInit {

  borrar: boolean;
  titulo: string;
  agenda: string;
  pais: Pais;
  Usu: Contacto;
  contactos: Contactoss;

  constructor(
    private ContService: ContactosService,
    private PService: PaisesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Registro Agenda';
    this.agenda = 'Agenda Usuarios';
    this.Usu = new Contacto;
  }

  ngOnInit() {
    this.getPaises();
    this.borrar = true;
    this.getUsuarios();
  }

   OnSubmit() {
    this.Registro();
  }

  getPaises() {
    this.PService.getPaises().subscribe(result => {
      this.pais = result;
    });
  }

  getUsuarios() {
    this.Usu.id_usuario = localStorage.getItem('usuario');
    this.ContService.getUsuarios(this.Usu).subscribe(
      response => {
        if (response.code === 200) {
          this.contactos = response.data;
        } else {
          console.log(response);
        }
      });
  }


  Registro() {
    this.Usu.id_usuario = localStorage.getItem('usuario');
    this.ContService.RegistroU(this.Usu).subscribe(
      response => {
        if (response.code === 200) {
          this.Usu = new Contacto;
          this.getUsuarios();
        } else {
          console.log(response);
          this.Usu = new Contacto;
        }
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  showDelete() {
    this.borrar = false;
  }

  showForm() {
    this.borrar = true;
  }

}
