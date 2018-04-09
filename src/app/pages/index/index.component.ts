import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.services';
import { error } from 'util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  datos:Object;

  constructor(private testService:TestService) { }

  ngOnInit() {
    this.testService.getData().subscribe(
      data => {
        this.datos = data;
        console.log(this.datos);
      }
    );
  }

}
