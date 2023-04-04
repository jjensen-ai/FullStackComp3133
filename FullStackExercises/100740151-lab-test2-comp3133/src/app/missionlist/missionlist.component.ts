import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Launch } from '../model/launch';
import { SpacexapiService } from '../services/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{

  launches!: Launch[];
  launch: Launch = new Launch();
  constructor(private launchService: SpacexapiService, private router: Router, ){}

  ngOnInit(){
      this.launchService.getLaunches().subscribe(data => {
        console.log(data);
        this.launches = data;
      })
  }

  launchDetails(flight_number: number){
    this.router.navigate(['launches', flight_number]);
    console.log(flight_number);
  }

}
