import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public carId;
  constructor(
    private route: ActivatedRoute
    ) {}
  ngOnInit() {
    this.carId = this.route.snapshot.params['carId'];
  }
}
