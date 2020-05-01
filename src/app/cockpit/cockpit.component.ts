import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // we are creating new properties for out custom event
  // <> indicates generic type, define data type inside
  
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

  // we no longer need this as now we are using #serverName and passing the value to onAddServer and onAddBlueprint
  // newServerName = '';
  // newServerContent = '';

  // @viewChild takes two arguments: the selector and static: true/false
  @ViewChild('serverContent', {static: true}) serverContent

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name, content) {

    console.log(this.serverContent)
    // this.serverCreated.emit({
    //   serverName: name.value, 
    //   // serverContent: this.newServerContent
    //   serverContent: content.value
    // })
  }

  onAddBlueprint(name, content) {

    // console.log(this.serverContent)
    // this.blueprintCreated.emit({
    //   serverName: name.value,
    //   // serverContent: this.newServerContent
    //   serverContent: content.value
    // })
  }

}
