import { Component } from '@angular/core'

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  message: string = 'Hello, Angular!'

  updateMessage(newMessage: string) {
    this.message = newMessage
    console.log(newMessage)
  }
}
