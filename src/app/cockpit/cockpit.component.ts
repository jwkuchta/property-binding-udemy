import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  
  // makes it listenable to from outside
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>() 
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()

  @ViewChild('serverContent', {static: true}) serverContent: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(name, content) {
    // emits the event to the parent component
    this.serverCreated.emit({
      serverName: name.value, 
      serverContent: content.value
    })
  }

  onAddBlueprint(name, content) {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: content.value
    })
  }
}

// @Output
// we are creating new properties for out custom event, <> indicates generic type, define data type inside

// @viewChild takes two arguments: the selector and static: true/false this is a reference to the element
// it allows us to have access to the local reference from the Typescript code without it being passed on
// to the method!!! (unlike local reference with #)
// do not use this to change the value of the Element, the DOM should not be accessed like this

