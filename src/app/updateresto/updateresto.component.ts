import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestoService } from '../resto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.css']
})
export class UpdaterestoComponent implements OnInit {
  constructor(private restsvc: RestoService, private router: ActivatedRoute) { }
  get name() {
    return this.editrestaurant.get('name');
  }
  get address() {
    return this.editrestaurant.get('address');
  }
  get email() {
    return this.editrestaurant.get('email');
  }
  id = 0;
  editrestaurant: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required])
  });

  showSuccessAlert = false;

  returnresult = {};
  getRouterParams() {
    this.id = this.router.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getRouterParams();
    this.getRestoById();
  }

  close() {
    this.showSuccessAlert = false;
  }

  updateResto() {
    this.restsvc.updateRestaurant(this.editrestaurant.value,this.id).subscribe(
      (result) => {
        this.showSuccessAlert=true;
      }
    );
  }

  getRestoById()
  {
    this.restsvc.getRestaturantById(this.id).subscribe(
      (result) => {
        this.editrestaurant = new FormGroup({
          name: new FormControl(result.name),
          address: new FormControl(result.address),
          email: new FormControl(result.email)
        });
      }
    );
  }
}
