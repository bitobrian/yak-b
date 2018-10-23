import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  todo = ['Tacos'];
  wip = ['Tacos'];
  hold = ['Tacos'];
  done = ['Tacos'];

  title = 'A Title mfer';
  description = 'A description mfreerrerererer.';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    localStorage.setItem('kanban.todo', JSON.stringify(this.todo));
    localStorage.setItem('kanban.done', JSON.stringify(this.done));
    localStorage.setItem('kanban.wip', JSON.stringify(this.wip));
    localStorage.setItem('kanban.hold', JSON.stringify(this.hold));
    console.log(this.todo);
    console.log(this.done);
  }

  constructor(public dialog: MatDialog) { }

  openDialog(): void {

    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '450px',
      data: { title: this.title, description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }

  ngOnInit() {
    this.todo = JSON.parse(localStorage.getItem('kanban.todo'));
    this.done = JSON.parse(localStorage.getItem('kanban.done'));
    this.wip = JSON.parse(localStorage.getItem('kanban.wip'));
    this.hold = JSON.parse(localStorage.getItem('kanban.hold'));
  }
}


