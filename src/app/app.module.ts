import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TimekeepComponent } from "./components/timekeep/timekeep.component";
import { RemoteComponent } from "./components/remote/remote.component";
import { OvertimeComponent } from "./components/overtime/overtime.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RemoteListComponent } from "./components/remote-list/remote-list.component";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { LeaveListComponent } from "./components/leave-list/leave-list.component";
import { LeaveComponent } from "./components/leave/leave.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminRoutingModule } from "./components/admin/admin-routing.module";
import { AdminComponent } from "./components/admin/admin.component";
import { EmployeeAdComponent } from "./components/admin/employee-ad/employee-ad.component";
import { RemoteAdComponent } from "./components/admin/remote-ad/remote-ad.component";
import { LeaveAdComponent } from "./components/admin/leave-ad/leave-ad.component";
import { OvertimeAdComponent } from "./components/admin/overtime-ad/overtime-ad.component";
import { TimekeepAdComponent } from "./components/admin/timekeep-ad/timekeep-ad.component";
import { NewsAdComponent } from "./components/admin/news-ad/news-ad.component";
import { AddNewsComponent } from "./components/admin/add-news/add-news.component";
import { NewsComponent } from "./components/news/news.component";
import { LoginComponent } from "./components/login/login.component";
import { TokenInterceptor } from "./interceptors/token.interceptor";

@NgModule({
    declarations:[
        FooterComponent,
        HomeComponent,
        HeaderComponent,
        TimekeepComponent,
        RemoteComponent,
        OvertimeComponent,
        AppComponent,
        RemoteListComponent,
        CalendarComponent,
        LeaveListComponent,
        LeaveComponent,
        UserProfileComponent,
        DashboardComponent,
        AdminComponent,
        EmployeeAdComponent,
        RemoteAdComponent,
        LeaveAdComponent,
        OvertimeAdComponent,
        TimekeepAdComponent,
        NewsAdComponent,
    AddNewsComponent,
    NewsComponent,
    LoginComponent

        
    ],
    imports:[
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        AdminRoutingModule
    ],
    providers:[{
        provide : HTTP_INTERCEPTORS,
        useClass : TokenInterceptor,
        multi : true
    }],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {}