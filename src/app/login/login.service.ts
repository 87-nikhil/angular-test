import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    isLogin:boolean;
    loginUsers:any=[{mobile:'1234567890',password:'123'},{mobile:'8878888771',password:'123'}]

    login(param) {
        this.isLogin = this.loginUsers.some(i => {
            if(i.mobile === param.mobile && i.password === param.password){
               return true;
            } else { 
               return false;
            }
        })
       return this.isLogin
    }
    
}