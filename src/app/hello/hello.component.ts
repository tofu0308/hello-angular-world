import { Component } from '@angular/core'
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common'

@Component({
  selector: 'app-hello',
  imports: [NgIf, NgFor, NgClass, NgStyle],
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

  items: string[] = ['Apple', 'Banana', 'Cherry']
  addItem(item: string): void {
    this.items.push(item)
  }

  removeItem(index: number): void {
    this.items.splice(index, 1)
  }

  isActive: boolean = false

  toggleActive() {
    this.isActive = !this.isActive
  }

  textColor: string = 'black'

  changeColor() {
    this.textColor = this.textColor === 'black' ? 'red' : 'black'
  }
}
