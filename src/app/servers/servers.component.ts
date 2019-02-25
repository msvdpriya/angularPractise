import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server';
  serverName = 'test' ;
  serverCreated = false;
  servers = ['test1', 'test2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
  this.serverCreationStatus = 'Server was created';
  this.serverCreated = true;
this.servers.push(this.serverName);

  }
  onUpdateServerName(event:any){
    this.serverName = event.target.value;
  }
}
