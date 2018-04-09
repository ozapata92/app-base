import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

let token = localStorage.getItem('token');

@Injectable()
export class TestService {
    constructor(private http: HttpClient) {
    }

    getData() {
        const headers = new HttpHeaders({'Authorization':token});

        return this.http.get('http://localhost:8080/api/test', {headers});
        //return "Hola, soy service";
    }
    
 }