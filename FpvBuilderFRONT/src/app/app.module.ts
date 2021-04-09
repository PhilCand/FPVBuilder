import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    timeLineComponent,
    UsageComponent,
    HomeComponent,
    builderComponent,
    FrameComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'builder', component: builderComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
