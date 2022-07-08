import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/template/header/header.component';
import { FooterComponent } from './shared/components/template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './views/home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HealthCrudComponent } from './views/health/health.component';
import { ForDirective } from './directives/for.directive';
import { RedDirective } from './directives/red.directive';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { HealthCreateComponent } from './shared/components/health/health-create/health-create.component';
import { HealthReadComponent } from './shared/components/health/health-read/health-read.component';
import { HealthUpdateComponent } from './shared/components/health/health-update/health-update.component';
import { HealthDeleteComponent } from './shared/components/health/health-delete/health-delete.component';
import { MatCardModule } from '@angular/material/card';
import { TravelCrudComponent } from './views/travel/travel.component';
import { TravelCreateComponent } from './shared/components/travel/travel-create/travel-create.component';
import { TravelReadComponent } from './shared/components/travel/travel-read/travel-read.component';

import { TravelUpdateComponent } from './shared/components/travel/travel-update/travel-update.component';
import { TravelDeleteComponent } from './shared/components/travel/travel-delete/travel-delete.component';
import { MatchesCrudComponent } from './views/matches/matches.component';
import { MatchesCreateComponent } from './shared/components/matches/matches-create/matches-create.component';
import { MatchesReadComponent } from './shared/components/matches/matches-read/matches-read.component';
import { MatchesUpdateComponent } from './shared/components/matches/matches-update/matches-update.component';
import { MatchesDeleteComponent } from './shared/components/matches/matches-delete/matches-delete.component';


const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'healths', component: HealthCrudComponent},
  {path: 'travels', component: TravelCrudComponent},
  {path: 'matchess', component: MatchesCrudComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginSignupComponent,
    HealthCrudComponent,
    HealthCreateComponent,
    HealthReadComponent, 
    HealthUpdateComponent,
    HealthDeleteComponent,
    TravelCrudComponent,
    TravelCreateComponent,
    TravelReadComponent, 
    TravelUpdateComponent,
    TravelDeleteComponent,
    MatchesCrudComponent,
    MatchesCreateComponent,
    MatchesReadComponent, 
    MatchesUpdateComponent,
    MatchesDeleteComponent,
    RedDirective,
    ForDirective,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSortModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


