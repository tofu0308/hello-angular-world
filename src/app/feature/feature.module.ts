import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureComponent } from './feature.component'

@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule],
  exports: [FeatureComponent], // 必要に応じてexportする
})
export class FeatureModule {}
