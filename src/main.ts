import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header/header.component';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './app/menu/menu.component';

bootstrapApplication(HeaderComponent)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

  
bootstrapApplication(MenuComponent)
  .catch(err => console.error(err));