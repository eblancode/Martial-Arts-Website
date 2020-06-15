import { ServerService } from './../server.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() private martialArts: any[];
  private selectedMartialArt: any = null;
  /*{ id: null, name: '', description: '', history: '', type: '', specialty: '',
  agresivity: '', equipment: '', competition_type: '', adoption_rate: '', floor_type: '',
  origin_country: '', foundation_year: null}*/
  //private selectable = false; (mouseover)="selectable=true" (mouseout)="selectable=false"

  constructor(private server: ServerService) { }

  ngOnInit() { }

  private searchValue(ma_name: string) {
    let that = this;
    this.martialArts.forEach(function (value) {

      if (value.name.toLowerCase() === ma_name.toLocaleLowerCase()) {
        that.setSelectedMartialArt(value);
        return;
      }
    });
  }

  private setSelectedMartialArt(ma: any) {
    this.selectedMartialArt = ma;
  }
  /*ngOnChanges(changes: SimpleChanges) {
    this.martialArts = changes.AppComponent.martialArts;
  }*/

}
