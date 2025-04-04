import { Component } from '@angular/core'
import { ExampleService } from '../../services/example.service'

@Component({
  selector: 'app-feature-one',
  template: `
    <p>Feature One: {{ exampleService.message }}</p>
    <button (click)="updateMessage()">メッセージ更新</button>
  `,
})
export class FeatureOneComponent {
  constructor(public exampleService: ExampleService) {}

  updateMessage() {
    this.exampleService.setMessage('FeatureOne で更新されました')
  }
}
