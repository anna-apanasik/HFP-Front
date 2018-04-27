import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule} from "@angular/http";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {DropdownModule} from 'ngx-dropdown';
import {Form, FormsModule} from '@angular/forms';
import {LoginComponent} from './LoginPage/login.component';
import {LoginPageComponent} from './LoginPage/Login/loginpage.component';
import {RegisterComponent} from './LoginPage/RegisterPage/register.component';
import {AuthHttp} from 'angular2-jwt';
import {Http, RequestOptions} from '@angular/http';
import {UserService} from '../service/userService';
import {AuthGuard} from '../service/guards/auth.guards';
import {AuthenticationService} from '../service/AuthentificationService';
import {authHttpUserFactory} from '../../authUserFactory';
import {appRouting, routing} from "./app.routing";
import {CommonModule} from "@angular/common";
import {logoutComponent} from "./logout/logout.component";
import {profileComponent} from "./Profile/profile.component";
import {RouterModule, Router, Routes} from "@angular/router";
import {appMenuProfileComponent} from "./Profile/MenuProfile/menuProfile.component";
import {EditProfileComponent} from "./Profile/EditProfile/editProfile.component";
import {InfoProfileComponent} from "./Profile/InfoProfile/infoProfile.component";
import {ImageComponent} from "./imageArea/image.component";
import {Ng2CloudinaryModule} from "ng2-cloudinary";
import { FileUploadModule } from 'ng2-file-upload';
import {CloudinaryComponent} from "./CloudinaryImageComponent/CloudinaryComponent";
import {DatePickerModule} from "ng2-datepicker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmProfileComponent} from "./Profile/СonfirmProfile/confirmProfile.component";
import {AdminPageComponent} from "./Profile/adminPage/adminPage.component";
import {ValidationData} from "../service/validationData";
import {HeaderService} from "../service/HeaderService";
import {MessageComponent} from "./Profile/MessagePage/Message.component";
import { TagInputModule } from 'ngx-chips';
import {EditorStepComponent} from "./Instructions/Editor/editorStep.component";
import {InstructionComponent} from "./Instructions/instruction.component";
import {InstructionService} from "../service/InstructionService";
import {SuccessRegistrationComponent} from "./SuccessRegistration/successRegistration.component";
import {StepService} from "../service/StepService";
import {DeleteProfileComponent} from "./Profile/DeleteProfile/deleteProfile.component";
import {ProfileInstructionComponent} from "./Instructions/ProfileInstruction/profileInstruction.component";
import {ViewInstructionComponent} from "./Instructions/ViewInstruction/viewInstruction.component";
import {ViewStepComponent} from "./Instructions/ViewStep/viewStep.component";
import {UserInstructionComponent} from "./Profile/UserInstructions/userInstruction.component";
import {MainPageComponent} from "./MainPage/mainPage.component";
import {SectionComponent} from "./MainPage/Section/section.component";
import {InstructionHelper} from "../service/helpers/InstructionHelper";
import {CreateSectionComponent} from "./Profile/CreateSection/createSection.component";
import {SectionService} from "../service/SectionService";
import {RatingComponent} from "./Rating/rating.component";
import {EditorCommentComponent} from "./Comments/Editor/editorComment.component";
import {CommentService} from "../service/CommentService";
import {CommentsComponent} from "./Comments/comments.component";
import {RatingService} from "../service/RatingService";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginPageComponent,
    RegisterComponent,
    logoutComponent,
    profileComponent,
    appMenuProfileComponent,
    EditProfileComponent,
    InfoProfileComponent,
    ImageComponent,
    CloudinaryComponent,
    SuccessRegistrationComponent,
    ConfirmProfileComponent,
    AdminPageComponent,
    EditorStepComponent,
    MessageComponent,
    InstructionComponent,
    DeleteProfileComponent,
    ProfileInstructionComponent,
    ViewInstructionComponent,
    ViewStepComponent,
    UserInstructionComponent,
    MainPageComponent,
    SectionComponent,
    CreateSectionComponent,
    EditorCommentComponent,
    CommentsComponent,
    CreateSectionComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    routing,
    HttpModule,
    HttpClientModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    TagInputModule,
    DatePickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpUserFactory,
      deps: [Http, RequestOptions]
    },
    UserService,
    AuthGuard,
    AuthenticationService,
    ValidationData,
    HeaderService,
    InstructionService,
    StepService,
    appRouting,
    InstructionHelper,
    SectionService,
    CommentService,
    RatingService
  ],
  bootstrap: [ AppComponent]
})
export class AppModule {}
