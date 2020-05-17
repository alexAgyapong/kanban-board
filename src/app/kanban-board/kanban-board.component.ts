import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  isSidebarVisible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  hideSidebar() {
    this.isSidebarVisible = false;
  }
}
