import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
  restaturantCollection: any = {};
  constructor(private restsvc: RestoService) { }

  ngOnInit(): void {
    this.getAllResto();
  }

  getAllResto(){

    this.restsvc.getAllRestaturants().subscribe
    (
      (result) =>
      {
        this.restaturantCollection = result;
      }
    );
  }

  deleteResto(id: any)
  {
    this.restsvc.deleteRestaurant(id).subscribe(
      (result) =>
      {
        //this.restaturantCollection.splice(id - 1 , 1);
         this.getAllResto(); // to get list again from api
      }
    );
  }
}
