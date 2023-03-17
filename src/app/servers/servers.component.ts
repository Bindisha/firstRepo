import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', as attribute
  //selector:'.app-servers', //as class
  selector:'app-servers', //as element we should use
  //template: `
    //<app-server></app-server>
    //<app-server></app-server>`,
    templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver';
  serverCreated = false;
  servers =['Testserver', 'Testserver 2'];

  constructor() {
   // ()=> {} similar to function(){}
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
  }
  //onUpdateServerName(event:any) {
    //console.log(event);
  //}
  onUpdateServerName(event:Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
