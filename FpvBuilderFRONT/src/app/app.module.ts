import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { timeLineComponent } from './builder/shared/time-line/time-line.component';
import { UsageComponent } from './builder/parts/usages/usage.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { builderComponent } from './builder/builder.component';
import { FrameComponent } from './builder/parts/frames/frame.component';
import { SelectionComponent } from './builder/shared/selection/selection.component';
import { AdminUsagesComponent } from './admin/admin-usages/admin-usages.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { UsageDialogComponent } from './admin/admin-usages/usage-dialog/usage-dialog.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    timeLineComponent,
    UsageComponent,
    HomeComponent,
    builderComponent,
    FrameComponent,
    SelectionComponent,
    AdminUsagesComponent,
    AdminHomeComponent,
    ConfirmationDialogComponent,
    AdminNavComponent,
    UsageDialogComponent,
    NavbarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'builder', component: builderComponent},
      { path: 'admin', component: AdminHomeComponent},
      { path: 'admin/usage', component: AdminUsagesComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [SelectionComponent,
  { provide : LOCALE_ID, useValue: 'fr-FR'}],
  
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
