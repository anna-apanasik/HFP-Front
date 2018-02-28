import { Routes, RouterModule } from '@angular/router';

import {profileComponent} from "./profile/profile.component";
import {ProjectPageComponent} from "./createProject/projectPage.component";
import {SuccessRegistrationComponent} from "./SuccessRegistration/successRegistration.component";
import {ViewProjectComponent} from "./ViewProjectComponent/viewProject.component";
import {ProjectListComponent} from "./ViewProjectList/projectList.component";
import {SearcheResultComponent} from "./SearcheResult/searcheResult.component";
import {PayProjectComponent} from "./ViewProjectComponent/PayProject/payProject.component";
import {InfoProfileComponent} from "./profile/InfoProfile/infoProfile.component";
import {EditProfileComponent} from "./profile/EditProfile/editProfile.component";
import {InstructionComponent} from "./Instructions/instruction.component";
import {MessageComponent} from "./profile/MessagePage/Message.component";
import {ConfirmProfileComponent} from "./profile/confirmProfile/confirmProfile.component";
import {AdminPageComponent} from "./profile/adminPage/adminPage.component";

const appRoutes: Routes = [
  /* TODO change route for success registration in back (old route: succesRegistration) */
  {path:'success-registration',component: SuccessRegistrationComponent},
  {path: 'project', component: ProjectPageComponent},
  { path: 'profile',
    component: profileComponent,
    children: [
      { path: '', component: InfoProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'instruction/:id', component: InstructionComponent },
      { path: 'message-confirm', component: MessageComponent },
      { path: 'confirm-profile', component: ConfirmProfileComponent },
      { path: 'admin', component: AdminPageComponent }
    ]
  },
  {path: 'transferMoney', component: PayProjectComponent},
  {path: 'view/project/:idproject', component: ViewProjectComponent},
  {path: 'searcheResults/:request', component: SearcheResultComponent},
  {path: '', component: ProjectListComponent},
  {path: '**', redirectTo: '/' }
];

export const appRouting: any[]=[];

export const routing = RouterModule.forRoot(appRoutes) ;
