import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NetworkDemoComponent} from './network-demo/network-demo.component';
import {EchartDemoComponent} from './echart-demo/echart-demo.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'network', component: NetworkDemoComponent},
  {path: 'echart', component: EchartDemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
