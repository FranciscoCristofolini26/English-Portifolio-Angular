import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,             // <-- ESSENCIAL
  imports: [],                  // Pode deixar vazio ou importar outros componentes
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // <-- Corrigido aqui
})
export class HeaderComponent { }
