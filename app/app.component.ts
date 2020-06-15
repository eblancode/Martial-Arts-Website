import { Component, OnInit, Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  title = 'Martial Arts Website';

  private martialArts: any[];
  modalCallback: () => void;

  constructor(private server: ServerService) { }

  ngOnInit() {
    this.getMAsFromServer();
  }

  private getMAsFromServer() {

    this.server.getMAs().then((response: any) => {
      console.log('Response', response);
      this.martialArts = response;
    });
  }

}
