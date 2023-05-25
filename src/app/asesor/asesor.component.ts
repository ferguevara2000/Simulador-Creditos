import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit{
  fechaActual: Date = new Date();
  sistemaAmortizacion: string = '';
  tipoPersona: string = '';
  producto: string = '';
  subproducto: string = '';
  monto: number | null = null;
  plazo: number | null = null;

  calcular() {
    // Lógica de cálculo
  }


  limpiarCampos() {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.fechaActual = new Date(defaultDate);
    this.sistemaAmortizacion = '';
    this.tipoPersona = '';
    this.producto = '';
    this.subproducto = '';
    this.monto = null;
    this.plazo = null;
  
    const montoInput = document.getElementById('monto') as HTMLInputElement;
    const plazoInput = document.getElementById('plazo') as HTMLInputElement;
  
    if (montoInput && plazoInput) {
      montoInput.value = '';
      plazoInput.value = '';
    }
  }

  creditTypes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://my-json-server.typicode.com/ferguevara2000/Simulador-Creditos/creditTypes')
      .subscribe(data => {
        this.creditTypes = data;
      });
  }

  


}
