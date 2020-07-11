import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-project';
  userForm:FormGroup;
  id:number;
  users=[
    {id:1, name:"ram", mobno:"5845521225" ,email:"ram@gmail.com" ,address:"kotwada"},
    {id:2, name:"mohan", mobno:"88272521225" ,email:"mohan@gmail.com" ,address:"kotwada"},
    {id:3, name:"sharma", mobno:"9588221225" ,email:"sharma@gmail.com" ,address:"kotwada"},
    {id:4,name:"geeta", mobno:"9588521225" ,email:"geeta@gmail.com" ,address:"kotwada"},
  ]

  searchText: string;
  mobNo:string;
  submitted =false;

  /**
   * inside define form field
   */
  constructor(public dialog: MatDialog,
    private fb : FormBuilder,private _snackBar:MatSnackBar
  ){
   this.userForm = this.fb.group({
    id:['',Validators.required],
    name:['',Validators.required],
    mobno:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    address:['',Validators.required],
   })
  }

  /**
   * use in validation return controls
   */
  get f() { return this.userForm.controls; }

  /**
   * form submit
   */
  submitForm(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

    let item ={
      id:this.userForm.controls['id'].value,
      name:this.userForm.controls['name'].value,
      mobno:this.userForm.controls['mobno'].value,
      email:this.userForm.controls['email'].value,
      address:this.userForm.controls['address'].value
    }
    if(this.userForm.value){
      this.users.push(item)
      localStorage.setItem("userObj",JSON.stringify(this.users))
      this.users=JSON.parse(localStorage.getItem("userObj"))
      console.log(this.users)
      // this.users.push(item)
      this.userForm.reset();
      this._snackBar.open("data inserted","Dismiss" ,{
        duration: 2000,
      });
    }
  }

  ngOnInit(){
    
 var js ="my name is jeevan"
 var arr =[];
 arr.push(js)
 console.log(arr)
 for(let i=0 ; i<arr.length; i++){
console.log("string first letter", [i][0])

}



let nameArr = ['my', 'name', 'is' ,'jeevan']
for(let i=0;i<nameArr.length; i ++)
console.log(i[0])
  }
  
  /**
   * 
   * @param data 
   * edit function 
   */

  edit(data){
    const dialogRef = this.dialog.open(UserupdateComponent, {
      width: '250px',
      data:data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
        for(let i =0 ; i<this.users.length; i++){
          if(this.users[i].id == result.id)
          this.users[i] = result
        }
        this.ngOnInit()
    });
  }

  /**
   * 
   * @param i 
   * delete function
   */
  delete(i){
    this.users.splice(this.users.indexOf(i),2)
    this._snackBar.open("data deleted successfully","Dismiss" ,{
      duration: 2000,
    });
  }
}


 // displayedColumns: string[] = ['name', 'mobno', 'email', 'address'];
  // dataSource: MatTableDataSource<UserData>;