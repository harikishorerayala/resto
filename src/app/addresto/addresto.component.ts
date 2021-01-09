import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-addresto',
  templateUrl: './addresto.component.html',
  styleUrls: ['./addresto.component.css']
})
export class AddrestoComponent implements OnInit {

  get name()
  {
    return this.addrestaurant.get('name');
  }
  get address()
  {
    return this.addrestaurant.get('address');
  }
  get email()
  {
    return this.addrestaurant.get('email');
  }
  constructor(private restsvc: RestoService) { }

  addrestaurant: FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required])
  });
  showSuccessAlert = false;
  returnresult = {};
  close(){

    this.showSuccessAlert = false;
  }
  ngOnInit(): void {
  }
  addResto()
  {
    this.restsvc.addNewRestaurant(this.addrestaurant.value).subscribe(
      (result) =>
      {
          // tslint:disable-next-line: no-non-null-assertion
          this.returnresult = `${result.name} added successfully`;
          //this.addResto.reset();
          this.showSuccessAlert = true;
      }
    );
  }
}
