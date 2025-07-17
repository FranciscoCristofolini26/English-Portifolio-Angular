import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { Day01Component } from './day01/day01.component';
import { Day02Component } from './day02/day02.component';
import { Day03Component } from './day03/day03.component';
import { Day04Component } from './day04/day04.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, MenuComponent, Day01Component, Day02Component, Day03Component, Day04Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  

export class AppComponent {
  diaSelecionado: string = '';
  isMenuOpen: boolean = false;

  trocarComponente(dia: string) {
    this.diaSelecionado = dia;
    this.isMenuOpen = false; // fecha o menu após seleção
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
