import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import "rxjs/add/operator/first";

import * as _ from "lodash";
import { Router } from "@angular/router";
import { User } from "src/app/_models/user";
import { UserService } from "src/app/_services/user.service";
import { CoreService } from "src/app/_services/core.service";

@Component({
  moduleId: module.id,
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  peoples: any = [];
  model: any = {};
  loading: boolean = false;
  addForm: any;
  d: number = 1;
  totalElements = 1;
  changepage = false;

  constructor(
    private userService: UserService,
    private coreService: CoreService,
    private router: Router
  ) {}

  ngOnInit() {
    // get users from secure api end point
    this.getData();
  }
  pageChanged(event) {
    this.changepage = true;
    this.currentPage = event ? event : 1;
    this.getData();
  }
  
  addAccount() {
    this.router.navigate(["/home/new", { flagState: "new" }]);
  }
  editUser(people) {
    this.model = _.merge(this.model, people);
    this.model._id = JSON.stringify(this.model._id);
    this.router.navigate([
      "/home/1",
      _.merge(this.model, { flagState: "edit" }),
    ]);
  }
  delUser(_id) {
    this.coreService
      .del("http://localhost:5000/api/people/" + _id.$oid, {})
      .subscribe(
        (res: any) => {
          if (res.data === "Ok") {
            this.getData();
          }
        },
        (err) => {}
      );
  }
  createUser(addForm: NgForm) {
    this.loading = true;
    if (addForm.invalid) {
      this.loading = false;
      return true;
    } else {
      this.coreService
        .post("http://localhost:5000/api/people", this.model)
        .subscribe(
          (res: any) => {
            if (res.data === "Ok") {
              this.loading = false;
              this.getData();
            }
          },
          (err) => {}
        );
    }
  }
  getData() {
    this.model.lastname = this.model.lastname
      ? this.model.lastname.trim()
      : this.model.lastname;
    this.model.firstname = this.model.firstname
      ? this.model.firstname.trim()
      : this.model.firstname;
    this.model.email = this.model.email
      ? this.model.email.trim()
      : this.model.email;
    this.currentPage = this.changepage ? this.currentPage : 1;
    this.coreService
      .post("http://localhost:5000/api/search?page=" + this.currentPage + "&size=20", this.model)
      .subscribe(
        (res: any) => {
          this.peoples = res.data;
          this.totalElements = res.totalElements;
          this.changepage = false

        },
        (err) => {}
      );
  }
  updateUser() {
    let obj: any = { ...this.model };
    console.log(123, obj);
    this.coreService
      .put("http://localhost:5000/api/people/" + obj._id.$oid, obj)
      .subscribe(
        (res: any) => {
          this.getData;
        },
        (err) => {}
      );
  }
}
