import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  SimpleChange,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // this line will prevent encapsulation and will apply this components css globally
  encapsulation: ViewEncapsulation.None // Emulated is default and not necessary to add, another option is Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {

  // AfterViewInit gives you access to the Elements
  @ViewChild('heading', {static: true}) header: ElementRef

  // available after AfterContentInit
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef
  
  @Input() name: string

  constructor() { 
    console.log('constractor called')
  }
  
  // the only hook that takes an argument
  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngoninit called')
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    // the header is not available here yet
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    // this is only called once
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('After View Init!')
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    // we now have access to the header
  }

  ngAfterViewChecked() {
    console.log('After View Checked')
  }

  ngOnDestroy() {
    console.log('Destroy!')
  }

}

// @Input() exposes the "element" property to all othe components
// srvElement is an alias that has to be used from outside of this component!!!
// @Input('srvElement') element: {type: string, name: string, content: string}

