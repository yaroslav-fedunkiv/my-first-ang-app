import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent{
  allowNewServer = false;
  serverCreationStatus = 'Please update your username!';
  userName = '';

  onCreateName(){
    this.serverCreationStatus = 'Username was updated to \"' + this.userName +'\"';
    this.userName = '';
  }
}
