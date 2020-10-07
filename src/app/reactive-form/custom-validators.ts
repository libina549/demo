import { AbstractControl,ValidationErrors } from '@angular/forms'
import { resolve } from 'url';
import { ResolveEnd } from '@angular/router';
import { promise } from 'protractor'

export class CustomValidators{
    static checkSpace(control:AbstractControl): null | ValidationErrors{
        // if((control.value as string).indexOf(" ") != -1){
        if(control.value.indexOf(" ") != -1){
            return { checkSpace:true }
        }
        else{
            return null
        }
    }
    static duplicateUser(control:AbstractControl): Promise< null | ValidationErrors>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(null)
            },1000)
           
        })
    }
}
