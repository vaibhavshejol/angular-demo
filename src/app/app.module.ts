import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstChildComponent } from './first/first-child/first-child.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { BindingSessionComponent } from './binding-session/binding-session.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AdditionPipe, ReversePipe } from './pipe/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DashboardComponent,
    FirstChildComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ParentComponent,
    ChildComponent,
    BindingSessionComponent,
    PipesComponent,
    ReversePipe,
    AdditionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
