import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo_project';


  adminForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  companyForm = this.fb.group({
    companyName: new FormControl('', [Validators.required]),
    admins: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get admins() {
    return this.companyForm.controls["admins"] as FormArray;
  }

  addNewAdmin(){
    const arr=this.fb.group({
      name: new FormControl(''),
      email: new FormControl(''),
    });

    this.admins.push(arr);
  }


  deleteAdmin(index:any){

    this.admins.removeAt(index);

  }



save(){
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(this.companyForm.value);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
}




}
