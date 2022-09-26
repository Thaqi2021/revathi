import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginUserService } from './login-user.service';
import { LearnComponent } from './learn/learn.component';
import { RepeatDirective } from './learn/repeat.directive';
import { SortPipe } from './learn/sort.pipe';
import { CourseListComponent } from './learn/course-list/course-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxsModule } from '@ngxs/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LearnComponent,
    RepeatDirective,
    SortPipe,
    CourseListComponent,
    CartComponent,
    NavbarComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
