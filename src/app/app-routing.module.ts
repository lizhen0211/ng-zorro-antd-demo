import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NetworkDemoComponent} from './network-demo/network-demo.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'network', component: NetworkDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
