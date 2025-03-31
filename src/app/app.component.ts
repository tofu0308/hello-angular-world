import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HelloComponent } from './hello/hello.component'
import { TodoComponent } from './todo/todo.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hello-angular-world'
}
