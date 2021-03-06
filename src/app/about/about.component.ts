import { Component, OnInit } from '@angular/core';
import {LeaderService} from '../services/leader.service';
import {Leader} from '../shared/leader';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
   this.leaderservice.getLeader().subscribe(
    leaders=>this.leaders=leaders);
  }

}
