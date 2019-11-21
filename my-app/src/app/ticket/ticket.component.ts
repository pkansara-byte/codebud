import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { flightService } from '../../services/flights.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
flight = "";
seats = 0;
loaded = false;
detail: any;

  constructor(private route: ActivatedRoute, private  commonService: CommonService,private _flightService: flightService) { }

  ngOnInit() {
  this.loaded = false;
  this.route.queryParams.subscribe(params => {
    this.flight = params["flight"]; 
    this.seats = params["seats"]; 
    
    });

    setTimeout(()=>{
      this._flightService.getDetail(this.flight)
        .subscribe(data => {
          this.detail = data["response"][0];
          this.loaded = true;
        });
    },300);
  }

}
