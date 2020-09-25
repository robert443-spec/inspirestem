import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnovationhubComponent } from './innovationhub/innovationhub.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StemambassodorsComponent } from './stemambassodors/stemambassodors.component';
import { StemclubsComponent } from './stemclubs/stemclubs.component';
import { StemgamesComponent } from './stemgames/stemgames.component';
import { StemlibraryComponent } from './stemlibrary/stemlibrary.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'stemambassodors',component:StemambassodorsComponent},
  {path:'innovationhub',component:InnovationhubComponent},
  {path:'stemclubs',component:StemclubsComponent},
  {path:'stemlibrary',component:StemlibraryComponent},
  {path:'stemgames',component:StemgamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
