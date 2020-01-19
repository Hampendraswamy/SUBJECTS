import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { SubjectsService } from './subjects.service';


const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent}
  // {path:'**', component:AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  providers: [SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
