import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RenderviewComponent } from './renderview/renderview.component';
import { HostlistenComponent } from './hostlisten/hostlisten.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { TestdirDirective } from './Directives/testdir.directive';
import { HostdirectiveDirective } from './Directives/hostdirective.directive';
import { DropdownDirective } from './Directives/dropdown.directive';
import { DropdownbarComponent } from './dropdownbar/dropdownbar.component';

const appRoutes: Routes =[
  { path: '' , component: HomeComponent  },
  { path: 'render', component:RenderviewComponent },
  { path: 'host', component: HostlistenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RenderviewComponent,
    HostlistenComponent,
    HomeComponent,
    ChildComponent,
    TestdirDirective,
    HostdirectiveDirective,
    DropdownDirective,
    DropdownbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
