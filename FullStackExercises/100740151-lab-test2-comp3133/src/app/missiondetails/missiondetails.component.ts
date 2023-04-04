import { Component, OnInit } from '@angular/core';
import { Launch } from '../model/launch';
import { SpacexapiService } from '../services/spacexapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit{
  flight_number!: number;
  flight!: Launch;


  constructor (private flightService: SpacexapiService, private route: ActivatedRoute, private router: Router ) {}

  ngOnInit(){
    this.flight = new Launch();
    this.flight_number = this.route.snapshot.params['flight_number'];

    this.flightService.getFlightDetails(this.flight_number).subscribe(data => {
        console.log(data);
        this.flight = data;
      });
  }

  launchList(){
    this.router.navigate(['launches']);
  }
}
