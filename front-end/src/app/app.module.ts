import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuillModule, QuillConfig } from 'ngx-quill';

const config: QuillConfig = {};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateQuestionComponent } from './create-question/create-question.component';

import { MatTabsModule } from '@angular/material/tabs';
import { FindQuestionComponent } from './find-question/find-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    FindQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered'}, { list: 'bullet' }],
          [{ script: 'sub'}, { script: 'super' }],
          [{ indent: '-1'}, { indent: '+1' }]
        ]
      },
      theme: 'snow',
      format: 'object'
    }),
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
