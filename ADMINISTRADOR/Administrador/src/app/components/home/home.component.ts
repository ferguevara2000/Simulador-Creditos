import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AsesoresService } from '../services/asesores.service';
import { Asesor } from '../models/asesor.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sideNavStatus: boolean = false
  data: Asesor[] = []
  listFields: string[] = ['Id','Nombre','Usuario','Entidad']
  
  columns: any[] = [
    { field: 'id', title: 'Id' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'usuario', title: 'Usuario' },
    { field: 'banco', title: 'Entidad' },
     ];
  constructor(private asesorServices: AsesoresService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.asesorServices.listaAsesores().subscribe(data => { 
      data.forEach((asesor: { banco: string; }) => {
        if (asesor.banco === "1") {
          asesor.banco = "Banco Pichincha";
        } else if (asesor.banco === "2") {
          asesor.banco = "Cooperativa Ambato";
        }
      });
      this.data = data
      console.log(data)
    }), (error: any) => {
      console.log('se imprime error' + error)
    }
  }
  deleteData(rowId: Number) {
    this.asesorServices.eliminarAsesor(rowId).subscribe(() => {
      this.loadData();
    });
  }
  abrir(IdAsesor: Number) {
    
  }
}
