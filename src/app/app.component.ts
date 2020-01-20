import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='';
  hideUpdate:boolean = true;
  title = 'Angular-Crud';
  employees = [
    {
      'name': 'Chris', position: 'Manager'
    },
    {
      'name': 'Cami', position: 'Designer'
    },
    {
      'name': 'Chini', position: 'Programer'
    }
  ]

  model:any = {};
  model2:any = {};

  addEmployee():void{
    this.employees.push(this.model);
    console.log(this.model);
    this.msg = 'Added successfully!';
  }

  deleteEmployee(i):void{
    var answer = confirm('Are you shure?');
    if(answer){
      this.employees.splice(i,1);
      this.msg = 'Deleted successfully!';
    }
  }

  num;
  editEmployee(i):void{
    this.hideUpdate=false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.num = i;
  }

  updateEmployee():void{
    let i = this.num;
    for (let j = 0; j<this.employees.length; j++) {
      if(i==j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Data saved successfully!';
      }
    }
  }

  closeAlert():void{
    this.msg='';
  }
}
