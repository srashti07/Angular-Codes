import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageComponent } from '../message/message.component';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
firstName: any;
myForm: any;
myform: any;
email: any;
  feedbackService: any;
  
 

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }
  
  feedback:Feedback={}

  
  location = ['Huntsville', 'Springdale', 'Orlando', 'Augusta', 'New York'];

  openSnackBar() {
    this._snackBar.openFromComponent(MessageComponent, {
      duration: 5000,
    });
  }
  onSubmit()
  {
    this.openSnackBar()
  }
}

