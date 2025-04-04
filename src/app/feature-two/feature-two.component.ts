import { Component } from '@angular/core'
import { ExampleService } from '../services/example.service'

@Component({
  selector: 'app-feature-two',
  template: ` <p>Feature Two: {{ exampleService.message }}</p> `,
})
export class FeatureTwoComponent {
  constructor(public exampleService: ExampleService) {}
}
