import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flightService } from '../../services/flights.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	flight = "";
	detail : any;
	isLogged = "false";
	userId = "";
	loaded = false;


  constructor(private _flightService: flightService, private route: ActivatedRoute,private  commonService: CommonService) { }

  ngOnInit() {
  if(this.commonService.userDetails != undefined && this.commonService.userDetails["username"] != "" && this.commonService.userDetails["username"] != null)
    {
      this.userId = this.commonService.userDetails["userId"];
      this.isLogged = this.commonService.userDetails["isLogged"];
    }
	  this.route.queryParams.subscribe(params => {
	    this.flight = params["flight"];      
	    });
this.loaded = false;

  	setTimeout(()=>{
      this._flightService.getDetail(this.flight)
        .subscribe(data => {
          this.detail = data["response"][0];
          this.loaded = true;
        });
    },300);
  }

}
