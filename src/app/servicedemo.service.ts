import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  constructor(private http:HttpClient) { }
  
  getPosts():Observable<any>{
     return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

//   getPosts():Observable<any>{
//     return this.http.get("http://127.0.0.1:8000/api/register/")
//  }


  postUser(data){
     return this.http.post("https://jsonplaceholder.typicode.com/posts",data)
  }
}
