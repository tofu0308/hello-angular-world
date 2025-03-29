import { Component } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-hello',
  imports: [NgIf],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  message: string = 'Hello, Angular!'

  updateMessage(newMessage: string) {
    this.message = newMessage
    console.log(newMessage)
  }

  isVisible = true
  toggleVisibility() {
    this.isVisible = !this.isVisible
  }
}
