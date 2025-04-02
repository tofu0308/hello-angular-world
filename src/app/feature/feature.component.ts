import { Component } from '@angular/core'
import { TodoComponent } from '../todo/todo.component'

@Component({
  selector: 'app-feature',
  imports: [TodoComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent {}
