import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutcomesInputComponent } from './outcomes-input/outcomes-input.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}