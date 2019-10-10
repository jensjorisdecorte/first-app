import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatProgressBarModule,],
  exports: [MatButtonModule, MatInputModule, MatProgressBarModule,]
})
export class MaterialModule {}