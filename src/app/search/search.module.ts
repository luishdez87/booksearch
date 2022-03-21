import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { SearchRoutingModule } from "./search.routing-module";
import { SearchComponent } from './search/search.component';
import { SearchService } from "./search/search.service";
import { AvailableTableComponent } from "./available-table/table.component";
import { FavoriteTableComponent } from './favorite-table/favorite-table.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    SearchComponent,
    AvailableTableComponent,
    FavoriteTableComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {}
