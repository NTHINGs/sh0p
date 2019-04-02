import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { VentaComponent } from './venta.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule,
    ],
    declarations: [
        VentaComponent,
    ],
    providers: [
    ],
})
export class VentaModule { }
