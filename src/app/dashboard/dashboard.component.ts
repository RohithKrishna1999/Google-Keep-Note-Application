import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private service: NotesService) {}
  public note = new Note();
  errMessage: string;
  public notes: Array<Note>;
  ngOnInit(): void {
    this.getNote();
  }
  getNote() {
    this.service.getNotes().subscribe((data: any) => {
      this.notes = data;
        }, (error) => {
          this.errMessage = error.message;
        });
  }
  addNote() {
    if (!this.note.title || !this.note.text) {
      this.errMessage = 'Title and Text both are required fields';
    }
    this.service.addNote(this.note).subscribe((data: any) => {
      this.notes.push(this.note);
    }, (error) => {
      this.errMessage = error.message;
    });
  }
}
