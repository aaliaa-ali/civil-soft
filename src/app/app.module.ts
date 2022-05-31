import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './body/side-menu/side-menu.component';
import { QuestionComponent } from './body/question/question.component';
import { QuestionEsayComponent } from './body/question/essay-question/essay-question.component';
import { FormsModule } from '@angular/forms';
import { McqQuestionComponent } from './body/question/mcq-question/mcq-question.component';
import { YesNoQuestionComponent } from './body/question/yes-no-question/yes-no-question.component';
import { ErrorMsgComponent } from './body/question/error-msg/error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    QuestionComponent,
    QuestionEsayComponent,
    McqQuestionComponent,
    YesNoQuestionComponent,
    ErrorMsgComponent,
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
