import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../api-client.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
    console.log(this.api.doRequest());
  }

}
