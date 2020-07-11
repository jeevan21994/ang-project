import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
  userFormUpdate:FormGroup;
  user_id: any;

  /**
   * 
   * @param dialogRef inject data 
   * @param fb 
   * @param _snackBar 
   * @param data 
   */
  constructor(public dialogRef: MatDialogRef<UserupdateComponent>,private fb : FormBuilder,
    private _snackBar:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
     }

  ngOnInit(): void {
       this.updateUserForm();
      this.user_id= this.data.id
       console.log(this.data.id)
  }

  /**
   * load update form and set value
   */
updateUserForm(){
  this.userFormUpdate=this.fb.group({
    id:['',Validators.required],
    name:['',Validators.required],
    mobno:['',Validators.required],
    email:['',Validators.required],
    address:['',Validators.required],
  })
 
  this.userFormUpdate.patchValue(this.data)
}

/**
 * submit form
 */
UpdateForm(user_id){
  if(this.userFormUpdate.value){
    this.dialogRef.close(this.userFormUpdate.value)
    this._snackBar.open("data update successfully","Dismiss" ,{
      duration: 2000,
    });
  }
}
}
