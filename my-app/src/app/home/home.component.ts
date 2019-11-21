import { Component, OnInit } from '@angular/core';
import { flightService } from '../../services/flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	data = [];
  constructor(private _flightService: flightService) { }

  ngOnInit() {
      const tmptagsArray = [];
      console.log("temp");
        this._flightService.get()
        .subscribe(data => {
          	this.data = data["response"];
        });
  }

}
