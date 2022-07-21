import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { AboutComponent } from './about/about.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    FooterComponent,
    ButtonComponent,
    TaskItemComponent,
    AboutComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
