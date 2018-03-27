import { Routes, RouterModule } from '@angular/router';

import {profileComponent} from "./Profile/profile.component";
import {ProjectPageComponent} from "./createProject/projectPage.component";
import {SuccessRegistrationComponent} from "./SuccessRegistration/successRegistration.component";
import {ViewProjectComponent} from "./ViewProjectComponent/viewProject.component";
import {ProjectListComponent} from "./ViewProjectList/projectList.component";
import {SearcheResultComponent} from "./SearcheResult/searcheResult.component";
import {PayProjectComponent} from "./ViewProjectComponent/PayProject/payProject.component";
import {InfoProfileComponent} from "./Profile/InfoProfile/infoProfile.component";
import {EditProfileComponent} from "./Profile/EditProfile/editProfile.component";
import {InstructionComponent} from "./Instructions/instruction.component";
import {MessageComponent} from "./Profile/MessagePage/Message.component";
import {ConfirmProfileComponent} from "./Profile/СonfirmProfile/confirmProfile.component";
import {AdminPageComponent} from "./Profile/adminPage/adminPage.component";
import {ViewInstructionComponent} from "./Instructions/ViewInstruction/viewInstruction.component";
import {UserInstructionComponent} from "./Profile/UserInstructions/userInstruction.component";
import {MainPageComponent} from "./MainPage/mainPage.component";
import {SectionComponent} from "./MainPage/Section/section.component";
import {CreateSectionComponent} from "./Profile/CreateSection/createSection.component";

const appRoutes: Routes = [
  { path: 'success-registration',component: SuccessRegistrationComponent },
  { path: 'instruction/:id', component: ViewInstructionComponent },
  { path: 'project', component: ProjectPageComponent},
  { path: 'profile',
    component: profileComponent,
    children: [
      { path: '', component: InfoProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'instruction/:id', component: InstructionComponent },
      { path: 'my-instructions', component: UserInstructionComponent },
      { path: 'message-confirm', component: MessageComponent },
      { path: 'confirm-profile', component: ConfirmProfileComponent },
      { path: 'create-section', component: CreateSectionComponent },
      { path: 'admin', component: AdminPageComponent }
    ]
  },
  {path: 'transferMoney', component: PayProjectComponent},
  {path: 'view/project/:idproject', component: ViewProjectComponent},
  {path: 'searcheResults/:request', component: SearcheResultComponent},
  {path: '', component: MainPageComponent},
  {path: 'section/:id', component: SectionComponent},
  {path: '**', redirectTo: '/' }
];

export const appRouting: any[]=[];

export const routing = RouterModule.forRoot(appRoutes) ;
