import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
  restaturantCollection = {};
  constructor(private restsvc: RestoService) { }

  ngOnInit(): void {
    this.restsvc.getAllRestaturants().subscribe
    (
      (result) =>
      {
        this.restaturantCollection = result;
      }
    );
  }

}
