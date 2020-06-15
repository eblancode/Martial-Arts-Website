import { Component, OnInit, Input } from '@angular/core';

const imagePath = "../../assets/img/";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() private _selectedMartialArt: any = null;
  private imgPath = imagePath;

  constructor() { }

  ngOnInit() {
    console.log(this._selectedMartialArt);
  }

}
