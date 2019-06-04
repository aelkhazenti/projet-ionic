import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'algo', loadChildren: './algo/algo.module#AlgoPageModule' },
  { path: 'python', loadChildren: './python/python.module#PythonPageModule' },
  { path: 'vbnet', loadChildren: './vbnet/vbnet.module#VbnetPageModule' },
  { path: 'cpp', loadChildren: './cpp/cpp.module#CppPageModule' },
  { path: 'lang-c', loadChildren: './lang-c/lang-c.module#LangCPageModule' },
  { path: 'java', loadChildren: './java/java.module#JavaPageModule' },
  { path: 'meris', loadChildren: './meris/meris.module#MerisPageModule' },
  { path: 'datab', loadChildren: './datab/datab.module#DatabPageModule' },
  { path: 'reseaux', loadChildren: './reseaux/reseaux.module#ReseauxPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
