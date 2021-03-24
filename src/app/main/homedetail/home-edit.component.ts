import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/_models/account";
import { CoreService } from "src/app/_services";
import * as _ from "lodash";

@Component({
  selector: "app-home-edit",
  templateUrl: "./home-edit.component.html",
  styleUrls: ["./home-edit.component.css"],
})
export class HomeEditComponent implements OnInit {
  editForm: FormGroup;
  flagState = "new";
  model: Account = new Account();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private coreService: CoreService,
    private activeRouter: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      lastname: ["", [Validators.required, Validators.maxLength(20)]],
      firstname: ["", [Validators.required, Validators.maxLength(20)]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      age: ["", Validators.required],
      gender: ["", Validators.required],
      employer: [""],
      city: [""],
      address: [""],
    });
    this.activeRouter.params.subscribe((res: any) => {
      console.log(res);

      this.model = _.merge(this.model, res);
      this.model._id = res && res._id ? JSON.parse(res._id) : this.model._id;
      this.flagState = res.flagState ? res.flagState : "new";

      console.log(123, this.model);
      console.log(33, this.flagState);
    });
  }

  ngOnInit() {}
  updateUser() {
    if (!this.editForm.valid) {
      console.log(123123);

      (<any>Object).values(this.editForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return true;
    } else {
      let obj: any = { ...this.model };
      if (this.flagState === "new") {
        this.coreService
          .post("http://localhost:5000/api/people", this.model)
          .subscribe(
            (res: any) => {
              if (res.data === "Ok") {
                this.router.navigate(["/home"]);
              }
            },
            (err) => {}
          );
      } else {
        this.coreService
          .put("http://localhost:5000/api/people/" + obj._id.$oid, obj)
          .subscribe(
            (res: any) => {
              this.router.navigate(["/home"]);
            },
            (err) => {}
          );
      }
    }
  }
  back() {
    this.router.navigate(["/home"]);
  }
}
