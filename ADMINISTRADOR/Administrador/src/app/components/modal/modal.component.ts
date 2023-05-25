import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Entidad } from '../models/banco.model';
import { AsesoresService } from '../services/asesores.service';
import { BancoService } from '../services/banco.service';
import { Asesor } from '../models/asesor.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectedBa?: number;
  bancos?: Entidad[];

  asesorForm = new FormGroup({
    id: new FormControl(''),
    selectedBa: new FormControl(''),
    nombre: new FormControl(''),
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  })

  constructor(private asesorService: AsesoresService,
    private bancoService: BancoService) {
  }

  id: Number = 0;
  idBanco: Number = 0;
  nombre: string = '';
  usuario: string = '';
  contrasena: string = '';

  borrarCampos() {
    this.asesorForm.reset();
  }
  ngOnInit(): void {
    this.loadData()
  }
  onSubmit() {
    console.log(this.selectedBa);
    var asesor = new Asesor(
      this.id,
      this.nombre,
      this.usuario,
      this.contrasena,
      this.selectedBa!,
    )
    console.log(Asesor);
    this.asesorService.guardarAsesor(asesor).subscribe(() => {
      this.borrarCampos();
      window.location.reload();
    }), (error: any) => {
      console.log(error)
    }

  }
  loadData(){
    this.bancoService.listaEntidades().subscribe(data => {
      const entidades = data
      this.bancos = entidades
      console.log(data)
    }), (error:any) => {
      console.log('se imprime error'+error)
    }
  }


}
