import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,             // <-- ESSENCIAL
  imports: [],                  // Pode deixar vazio ou importar outros componentes
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // <-- Corrigido aqui
})
export class MenuComponent {

  @Output() diaSelecionado = new EventEmitter<string>();

  selecionarDia(dia: string) {
    this.diaSelecionado.emit(dia); // envia para o app.component
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

 }
