import { Component,OnInit } from '@angular/core'

import { NgForm } from '@angular/forms'
import { User } from './user'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'TDF'
    nameHasError:boolean=false;
    passwordHasError: boolean = false; 
    statusHasError: boolean = true; 
    names: string[] = ['admin', 'administrator'];  
    genders = ['Male', 'Female', 'Other']
    status = ['Single', 'Married', 'Divorced', 'Separated', 'Widowed']

    onSubmit() {
        console.log(this.userData)
    }
    
    userData =new User('','','','',0,'','',false);
    constructor() { } 
    ngOnInit() {}
    
    validateName( value:string ) { 
         this.names.find(val => val === value || (!isNaN(parseInt(value)) && value !== '') ? this.nameHasError = 
        true : this.nameHasError = false); 
         }

    validatePaaword(confirmPassVal:string , passVal:string) { 
             passVal !== confirmPassVal ? this.passwordHasError = true : this.passwordHasError = false; 
             }
    validateStatus(value:string){
        value==='defualt' || value===''? this.statusHasError=true: this.statusHasError=false;
    }
}
