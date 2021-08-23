import { Injectable } from "@angular/core";

@Injectable() //autowired
export class AppService {
    save() {
        console.log('Service method called');
    }
}
