import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LiveStreamEvent } from '../models/liveStreamEvent';
import { LiveStreamService } from '../services/livestream.service';
import { checkEmail } from '../validators/EmailValidator';

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})
export class StudioLivestreamComponent implements OnInit {
  // liveStreamForm:FormGroup
  minDate:Date = new Date();
  options:string[]=[];
  guestList:string[]=[];

  liveStreamForm:FormGroup=this.fb.group({
    eventTitle: ['',[Validators.required,Validators.maxLength(100)]],
    eventDate:['',[Validators.required ]] ,
    
    fromTime:['',Validators.required],
    
    toTime:['',Validators.required],
    
    guests:[ '' ,[checkEmail(),Validators.required]],
    eventDescription:['']
  });
  constructor (private fb: FormBuilder, private _snackBar: MatSnackBar, private liveStreamService:LiveStreamService){ 
    // this.minDate = new Date();
  }
  ngOnInit(): void {
    // this.minDate=  new Date();
    this.options = this.generateTimeArray() 
    
    this.liveStreamForm.controls['guests'].valueChanges.subscribe( (guestEmails) => { 
      this.guestList = guestEmails?.split(',');      
    });
  }
  title="ViewTube - Event Schedule Form";
  
  get eventTitle(){
    return this.liveStreamForm.get('eventTitle')
  }
  get eventDate(){
    return this.liveStreamForm.get('eventDate')
  }
  get fromTime(){
    return this.liveStreamForm. get('fromTime')
  }
  get toTime(){
    return this.liveStreamForm. get('toTime')
  }
  get guests(){
    return this.liveStreamForm.get('guests')
  }
  get formDescription(){
    return this.liveStreamForm.get('description')
  }
  generateTimeArray(): string[] {
    const times: string[] = [];
  
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const hourStr = hours.toString().padStart(2, '0');
        const minuteStr = minutes.toString().padStart(2, '0');
        times.push(`${hourStr}:${minuteStr}`);
      }
    }
  
    return times;
  }
  foo(){
    console.log(this.liveStreamForm.value);
    // console.log( this.generateTimeArray() );
    console.log(this.guestList); 
  }
  save(){
    this.liveStreamService.addLiveStreamEvent(this.liveStreamForm.value as LiveStreamEvent).subscribe(
      success=>{
        this._snackBar.open('Congrats!!You have submitted the form!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
      },
      failure=>{
        alert(failure);
      } 
    )
  }
}
