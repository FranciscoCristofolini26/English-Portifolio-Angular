import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,             // <-- ESSENCIAL
  imports: [],                  // Pode deixar vazio ou importar outros componentes
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // <-- Corrigido aqui
})
export class HeaderComponent {
  @Output() abrirMenu = new EventEmitter<void>();

  onHamburguerClick() {
    this.abrirMenu.emit();
  }
}
