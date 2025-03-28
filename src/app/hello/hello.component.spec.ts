import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HelloComponent } from './hello.component'
import { By } from '@angular/platform-browser'

describe('HelloComponent', () => {
  let component: HelloComponent
  let fixture: ComponentFixture<HelloComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HelloComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the default message', () => {
    const p = fixture.debugElement.query(By.css('p')).nativeElement
    expect(p.textContent).toBe('Hello, Angular!')
  })
})
