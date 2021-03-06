import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatchComponent } from "./components/match/match.component";
import { HomeComponent } from "./components/home/home.component";
import { LeaderboardsComponent } from "./components/leaderboards/leaderboards.component";
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from "./components/nav/nav.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { MatchService } from "./services/match.service";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateProfileComponent } from "./components/create-profile/create-profile.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileService } from "./services/profile.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./services/auth-guard.service";
import { ChallengeComponent } from "./components/challenge/challenge.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { ServiceWorkerModule } from "@angular/service-worker";
@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    HomeComponent,
    LeaderboardsComponent,
    NavComponent,
    CreateProfileComponent,
    LoginComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [MatchService, ProfileService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
