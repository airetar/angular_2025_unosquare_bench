import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenuComponent
],
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent {
  gifsService = inject(GifsService);
}
