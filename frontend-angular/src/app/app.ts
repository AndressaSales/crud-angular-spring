import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatLineModule} from '@angular/material/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatLineModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
