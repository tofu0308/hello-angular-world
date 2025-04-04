import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class ExampleService {
  message = '初期メッセージ'

  setMessage(newMessage: string) {
    this.message = newMessage
  }
}
