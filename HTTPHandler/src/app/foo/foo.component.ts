import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from './foo.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})

export class FooComponent implements OnInit {

    fooData:Foo[];
    loading:boolean;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  getPrenotazioni(): void {
     this.loading = true;
     this.http
       .get<Foo[]>('https://my-json-server.typicode.com/KevinSolimo/JSONServer/Prenotazioni')
       .subscribe(data => {
       this.fooData = data;
       });
      }

//this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
//   this.oFoo.subscribe(data => {this.fooData = data;});

}
