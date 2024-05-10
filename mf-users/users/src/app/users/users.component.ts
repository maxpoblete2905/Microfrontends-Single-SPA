import { Component } from '@angular/core';

@Component({
    selector: 'page-users',
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
})
export class UsersComponent {

  userData = [
    {
      email: "juanperez@cmpc.com",
      rol: "Administrador",
      tenant: "Guaiba",
      estado: "Activo",
      fechaIngreso: "2024-05-01",
    },
    {
      email: "lauragomez@cmpc.com",
      rol: "Usuario",
      tenant: "Santa Fe",
      estado: "Inactivo",
      fechaIngreso: "2024-04-25",
    },
    {
      email: "carlosrodriguez@cmpc.com",
      rol: "SUPER ADMIN",
      tenant: "Pacifico",
      estado: "Activo",
      fechaIngreso: "2024-03-15",
    },
    {
      email: "mariagarcia@cmpc.com",
      rol: "Administrador",
      tenant: "Laja",
      estado: "Inactivo",
      fechaIngreso: "2024-02-10",
    },
    {
      email: "pedrofernandez@cmpc.com",
      rol: "Usuario",
      tenant: "Cordillera",
      estado: "Activo",
      fechaIngreso: "2024-01-05",
    },
    {
      email: "sofiatorres@cmpc.com",
      rol: "Usuario",
      tenant: "Guaiba",
      estado: "Inactivo",
      fechaIngreso: "2023-12-20",
    },
    {
      email: "davidlopez@cmpc.com",
      rol: "SUPER ADMIN",
      tenant: "Santa Fe",
      estado: "Activo",
      fechaIngreso: "2023-11-15",
    },
    {
      email: "anaperez@cmpc.com",
      rol: "Usuario",
      tenant: "Pacifico",
      estado: "Inactivo",
      fechaIngreso: "2023-10-10",
    },
    {
      email: "robertogonzalez@cmpc.com",
      rol: "Usuario",
      tenant: "Laja",
      estado: "Activo",
      fechaIngreso: "2023-09-05",
    },
    {
      email: "luciamartin@example.com",
      rol: "ADMIN",
      tenant: "Cordillera",
      estado: "Inactivo",
      fechaIngreso: "2023-08-01",
    }
  ];


}
