import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutcomesInputComponent } from './outcomes-input/outcomes-input.component';
import { PairingsDisplayComponent } from './pairings-display/pairings-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' }, // Default route
  { path: 'input', component: OutcomesInputComponent },
  { path: 'pairings', component: PairingsDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}