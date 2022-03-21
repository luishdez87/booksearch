import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
