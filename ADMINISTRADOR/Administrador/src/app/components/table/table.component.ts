import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data:any;
  @Input() columns!:any[];

  @Output() onDelete: EventEmitter<any> = new EventEmitter(); 
  @Output() onAbrir: EventEmitter<any> = new EventEmitter(); 
  
  pageActual: number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  abrir(object: any){
      this.onAbrir.emit();
  }

  deleteRow(rowId:number): void{
    Swal.fire({
      title: 'Esta Seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.onDelete.emit(rowId); 
        Swal.fire(
          'Eliminado!',
          'El registro a sido eliminado.',
        )
      }
    })    
  }
}
