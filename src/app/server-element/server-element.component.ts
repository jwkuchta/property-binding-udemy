import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // this line will prevent encapsulation and will apply this components css globally
  encapsulation: ViewEncapsulation.None // Emulated is default and not necessary to add, another option is Native
})
export class ServerElementComponent implements OnInit {
  
  // @Input() exposes the "element" property to all othe components
  // srvElement is an alias that has to be used from outside of this component!!!
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}

