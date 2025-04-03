import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HelloComponent } from './hello/hello.component'
import { TodoComponent } from './todo/todo.component'
import { FeatureOneComponent } from './components/feature-one/feature-one.component'
import { FeatureTwoComponent } from './components/feature-two/feature-two.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, TodoComponent, FeatureOneComponent, FeatureTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hello-angular-world'
}
