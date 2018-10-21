import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AddItemComponent } from './kanban-board/add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DragDropModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  entryComponents: [
    AddItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
