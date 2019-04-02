import { Component } from '@angular/core';

@Component({
  selector: 'ngx-inpos-venta',
  templateUrl: './venta.component.html',
})
export class VentaComponent {
  settings = {
    noDataMessage: 'No hay productos en la venta aún',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      barCode: {
        title: 'Código de Barras',
        type: 'string',
      },
      description: {
        title: 'Descripción',
        type: 'string',
      },
      price: {
        title: 'Precio Venta',
        type: 'number',
      },
      quantity: {
        title: 'Cantidad',
        type: 'number',
      },
      total: {
        title: 'Importe',
        type: 'number',
      },
      existence: {
        title: 'Existencia',
        type: 'number',
      },
    },
  };

  source = [];
  // source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
