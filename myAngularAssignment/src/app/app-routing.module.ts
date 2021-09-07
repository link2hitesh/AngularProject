import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './components/allusers/allusers.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { FinduserComponent } from './components/finduser/finduser.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';

const routes: Routes = [

  {path:'',component:AllusersComponent},
  {path:'updateUsers', component:UpdateuserComponent },
  {path: 'deleteUsers',component:DeleteUserComponent},
  {path:'findUsers', component:FinduserComponent},
  {path:'createUsers', component:CreateuserComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
