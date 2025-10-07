import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  user = {
    fname:'',
    lname:'',
    email:'',
    password:'',
  };

  users :any[] =[];

  submit(){
    if(this.user.fname && this.user.email){
      this.users.push({...this.user});
      alert("Successfully Registered!!");
      this.user={fname:'', lname:'', email:'', password:''};
    }
  }
}
