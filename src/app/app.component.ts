import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Day01Component } from './day01/day01.component';
import { Day02Component } from './day02/day02.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, Day01Component, Day02Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedDay = '';
  days = [
    { label: 'Day 01' },
    { label: 'Day 02' }
  ];

  onDayChange() {
    console.log('Selecionado:', this.selectedDay);
  }
}
