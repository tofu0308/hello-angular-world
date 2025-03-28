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

  it('should change message on click', () => {
    const button = fixture.nativeElement.querySelector('button')

    // 最初のメッセージが表示されるか
    expect(component.message).toBe('Hello, Angular!')

    // clickイベントを発火させる
    button.click()
    fixture.detectChanges()

    // クリック後のメッセージを確認
    expect(component.message).toBe('Single Click detected!')
  })

  it('should change message on double click', () => {
    const button = fixture.nativeElement.querySelector('button')

    // 最初のメッセージが表示されるか
    expect(component.message).toBe('Hello, Angular!')

    // ダブルクリックイベントを発火させる
    button.dispatchEvent(new MouseEvent('dblclick'))
    fixture.detectChanges()

    // ダブルクリック後のメッセージを確認
    expect(component.message).toBe('Double Click detected!')
  })

  it('should change message on mouseover', () => {
    const button = fixture.nativeElement.querySelector('button')

    // 最初のメッセージが表示されるか
    expect(component.message).toBe('Hello, Angular!')

    // マウスオーバーイベントを発火させる
    button.dispatchEvent(new MouseEvent('mouseover'))
    fixture.detectChanges()

    // マウスオーバー後のメッセージを確認
    expect(component.message).toBe('Button Hovered!')
  })

  it('should reset message on mouseleave', () => {
    const button = fixture.nativeElement.querySelector('button')

    // 初期メッセージが表示されるか
    expect(component.message).toBe('Hello, Angular!')

    // mouseleaveイベントを発火させる
    button.dispatchEvent(new MouseEvent('mouseleave'))
    fixture.detectChanges()

    // mouseleave後のメッセージを確認
    expect(component.message).toBe('Hello, Angular!')
  })
})
