import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '../app.component'
import { FeatureModule } from '../feature/feature.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureModule], // FeatureModuleを追加
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
