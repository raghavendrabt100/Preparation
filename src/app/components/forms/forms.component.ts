import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit{
  registationForm: any;
constructor(){}
  ngOnInit(): void {
   this.registationForm=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(10)]),
    'email':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z@$#]*'),Validators.maxLength(10)]),
    'password':new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
   })
  }

  submitData(){
    console.log(this.registationForm.value);
  }

get name(){
  return this.registationForm.get('name');
}
}
